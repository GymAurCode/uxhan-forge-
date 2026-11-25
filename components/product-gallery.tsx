import Image from 'next/image';

const screenshots = [
  { file: 'taqwa-2', width: 347, height: 718, caption: 'Prayer tracking', alt: 'Taqwa Habit prayer dashboard showing daily prayer records and progress' },
  { file: 'taqwa-3', width: 351, height: 720, caption: 'Explore and remembrance', alt: 'Taqwa Habit Explore screen with Quran and Tasbeeh sections' },
  { file: 'taqwa-1', width: 352, height: 721, caption: 'Your personal profile', alt: 'Taqwa Habit profile screen with avatar, rank and editable profile details' },
];

export function TaqwaGallery() {
  return <div className="screenshot-gallery" role="region" aria-label="Official Taqwa Habit screenshots" tabIndex={0}>{screenshots.map(shot => <figure key={shot.file}>
    <Image src={'/screenshots/' + shot.file + '.webp'} width={shot.width} height={shot.height} sizes="(max-width: 540px) 190px, 220px" alt={shot.alt} />
    <figcaption>{shot.caption}</figcaption>
  </figure>)}</div>;
}
