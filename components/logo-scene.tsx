'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function LogoScene() {
  const stage = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const host = stage.current;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    if (!host || reduced.matches) return;
    let stop = () => {};
    let cancelled = false;
    const launch = async () => {
      const [THREE, { GLTFLoader }] = await Promise.all([import('three'), import('three/addons/loaders/GLTFLoader.js')]);
      if (cancelled) return;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      const display = new THREE.Group();
      scene.add(display, new THREE.HemisphereLight(0xffffff, 0x6050b4, 2.4));
      const key = new THREE.DirectionalLight(0xffffff, 3.5);
      key.position.set(-3, 4, 5);
      const rim = new THREE.DirectionalLight(0xb4a1ff, 2);
      rim.position.set(2, 2, -3);
      scene.add(key, rim);
      camera.position.z = 5.6;
      renderer.setPixelRatio(Math.min(devicePixelRatio, matchMedia('(pointer: coarse)').matches ? 1 : 1.35));
      host.append(renderer.domElement);
      let visible = false;
      let loaded = false;
      let angle = 0;
      let phase = 0;
      let tilt = 0;
      const resize = new ResizeObserver(entries => {
        const { width: clientWidth, height: clientHeight } = entries[0].contentRect;
        if (!clientWidth || !clientHeight) return;
        renderer.setSize(clientWidth, clientHeight, false);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      });
      resize.observe(host);
      const track = (event: PointerEvent) => {
        tilt = (event.offsetY) / (renderer.domElement.height / renderer.getPixelRatio()) - 0.5;
      };
      const reset = () => { tilt = 0; };
      host.addEventListener('pointermove', track, { passive: true });
      host.addEventListener('pointerleave', reset);
      const dispose = (object: import('three').Object3D) => {
        object.traverse(child => {
          if (!(child instanceof THREE.Mesh)) return;
          child.geometry.dispose();
          const materials: import('three').Material[] = Array.isArray(child.material) ? child.material : [child.material];
          for (const material of materials) {
            for (const value of Object.values(material)) if (value instanceof THREE.Texture) value.dispose();
            material.dispose();
          }
        });
      };
      let previousTime: number | undefined;
      function updateLoop() {
        if (!loaded || !visible || document.hidden || reduced.matches) {
          renderer.setAnimationLoop(null);
          previousTime = undefined;
          if (loaded && reduced.matches) renderer.render(scene, camera);
          return;
        }
        renderer.setAnimationLoop(time => {
          const step = Math.min(time - (previousTime ?? time), 40);
          previousTime = time;
          angle += step * 0.00027;
          phase += step * 0.0013;
          display.rotation.y = angle;
          display.rotation.x += (tilt * 0.32 - display.rotation.x) * 0.07;
          display.position.y = Math.sin(phase) * 0.08;
          renderer.render(scene, camera);
        });
      }
      const visibility = new IntersectionObserver(([entry]) => {
        visible = entry.intersectionRatio >= 0.2;
        updateLoop();
      }, { threshold: 0.2 });
      visibility.observe(host);
      document.addEventListener('visibilitychange', updateLoop);
      reduced.addEventListener('change', updateLoop);
      stop = () => {
        visibility.disconnect();
        resize.disconnect();
        document.removeEventListener('visibilitychange', updateLoop);
        reduced.removeEventListener('change', updateLoop);
        host.removeEventListener('pointermove', track);
        host.removeEventListener('pointerleave', reset);
        renderer.setAnimationLoop(null);
        dispose(display);
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const gltf = await new GLTFLoader().loadAsync('/brand/3DLogoSpin.glb');
      if (cancelled) { dispose(gltf.scene); return; }
      const bounds = new THREE.Box3().setFromObject(gltf.scene);
      const center = bounds.getCenter(new THREE.Vector3());
      const size = bounds.getSize(new THREE.Vector3());
      const scale = 2.13 / Math.max(size.x, size.y, size.z);
      gltf.scene.position.sub(center);
      display.scale.setScalar(scale);
      display.add(gltf.scene);
      loaded = true;
      renderer.render(scene, camera);
      updateLoop();
      setReady(true);
    };
    let cancelLaunch = () => {};
    const gate = new IntersectionObserver(([entry]) => {
      cancelLaunch();
      if (!entry.isIntersecting) return;
      const start = () => {
        gate.disconnect();
        launch().catch(() => stop());
      };
      if ('requestIdleCallback' in window) {
        const idle = window.requestIdleCallback(start, { timeout: 1400 });
        cancelLaunch = () => window.cancelIdleCallback(idle);
      } else {
        const timer = setTimeout(start, 120);
        cancelLaunch = () => clearTimeout(timer);
      }
    });
    gate.observe(host);
    return () => {
      cancelled = true;
      gate.disconnect();
      cancelLaunch();
      stop();
    };
  }, []);
  return <div className="logo-stage" data-ready={ready}>
    <div className="orbit orbit-a" /><div className="orbit orbit-b" />
    <Image className="logo-fallback" src="/brand/Logo.png" alt="Uxhan Forge" fill sizes="(max-width: 460px) 70vw, (max-width: 760px) 335px, (max-width: 1250px) 42vw, 540px" priority />
    <div className="canvas-host" ref={stage} aria-hidden="true" />
  </div>;
}

