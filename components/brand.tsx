import Image from 'next/image';
import Link from 'next/link';

export function Brand() {
  return <Link href="/" className="brand" aria-label="Uxhan Forge home"><Image width={33} height={33} src="/brand/Logo.png" alt="" /><span>Uxhan Forge</span></Link>;
}

