'use client';

import Image from 'next/image';

interface PackDisplayProps {
  name: string;
  image: string;
}

export default function PackDisplay({ name, image }: PackDisplayProps) {
  return (
    <div className="w-full max-w-xs p-4 rounded-xl bg-zinc-800 shadow-md">
      <Image
        src={`/images/packs/${image}`}
        alt={name}
        width={250}
        height={300}
        className="rounded-md object-contain mx-auto"
      />
      <p className="mt-2 text-center text-white text-sm">{name}</p>
    </div>
  );
}
