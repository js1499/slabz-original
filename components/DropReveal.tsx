"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DropRevealProps {
  odds: {
    name: string;
    image: string;
    value: number;
    rarity: "common" | "rare" | "epic" | "legendary";
  }[];
  onFinish?: (result: { name: string; image: string; rarity: string }) => void;
}

const rarityGlowMap = {
  common: "ring-4 ring-green-500/60",
  rare: "ring-4 ring-blue-500/60",
  epic: "ring-4 ring-purple-500/60",
  legendary: "ring-4 ring-orange-500/60",
};

export function DropReveal({ odds, onFinish }: DropRevealProps) {
  const [stage, setStage] = useState<"start" | "opening" | "revealed">("start");
  const [card, setCard] = useState<null | (DropRevealProps["odds"][number])>(null);

  useEffect(() => {
    if (stage === "start") {
      setStage("opening");
      setTimeout(() => {
        const selected = odds[Math.floor(Math.random() * odds.length)];
        setCard(selected);
        setStage("revealed");
        if (onFinish) onFinish(selected);
      }, 1500);
    }
  }, [stage, odds, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <AnimatePresence mode="wait">
        {stage === "opening" && (
          <motion.div
            key="pack"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[200px] h-[280px]"
          >
            <Image
              src="/images/packs/yellow pack.png"
              alt="Opening Pack"
              fill
              className="object-contain"
            />
          </motion.div>
        )}

        {stage === "revealed" && card && (
          <motion.div
            key="card"
            initial={{ scale: 0.5, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={`relative w-[220px] h-[300px] bg-black rounded-xl overflow-hidden ${
              rarityGlowMap[card.rarity]
            }`}
          >
            <Image
              src={card.image}
              alt={card.name}
              fill
              className="object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <h3 className="text-white text-center text-sm font-semibold">
                {card.name}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
