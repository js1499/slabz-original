'use client';

import Image from 'next/image';

interface CardDisplayProps {
  name: string;
  image: string;
}

export default function CardDisplay({ name, image }: CardDisplayProps) {
  return (
    <div className="w-full max-w-sm p-4 rounded-xl bg-zinc-900 shadow-lg">
      <Image
        src={`/images/cards/${image}`}
        alt={name}
        width={300}
        height={420}
        className="rounded-md object-contain mx-auto"
      />
      <h2 className="mt-2 text-center text-white text-lg font-semibold">{name}</h2>
    </div>
  );
}
