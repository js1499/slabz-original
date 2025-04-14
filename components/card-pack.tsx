"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CardPackProps {
  id: string;
  name: string;
  price: number;
  image: string; // This is the card image
  packColor: "red" | "blue" | "green" | "yellow";
}

export function CardPack({ id, name, price, image, packColor }: CardPackProps) {
  const router = useRouter();

  const packImageMap: Record<string, string> = {
    red: "/images/packs/red pack.png",
    blue: "/images/packs/blue pack.png",
    green: "/images/packs/green pack.png",
    yellow: "/images/packs/yellow pack.png",
  };

  const packSrc = packImageMap[packColor];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/drops/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group transition-transform hover:scale-105"
    >
      <div className="flex flex-col items-center space-y-2 cursor-pointer">
        <div className="relative w-[120px] h-[160px] sm:w-[140px] sm:h-[180px] md:w-[160px] md:h-[200px]">
          {/* Pack Image */}
          <Image
            src={packSrc}
            alt={`${name} Pack`}
            fill
            className="object-contain z-0 pointer-events-none"
          />

          {/* Card Overlay in bottom right with thicker, rounded shadow */}
          <Image
            src={image}
            alt={`${name} Card`}
            width={100}
            height={140}
            className="absolute bottom-0 right-0 z-10 scale-90 object-contain pointer-events-none shadow-2xl shadow-black/50 rounded-xl group-hover:scale-100 transition-transform"
          />
        </div>

        <h3 className="text-sm font-semibold text-center text-white">{name}</h3>

        <div
          className={`text-white rounded-full px-3 py-1 text-xs font-medium border ${
            packColor === "red"
              ? "border-red-500 text-red-400"
              : packColor === "blue"
              ? "border-blue-500 text-blue-400"
              : packColor === "green"
              ? "border-green-500 text-green-400"
              : "border-yellow-500 text-yellow-400"
          }`}
        >
          💎 {price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}