"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowLeft, Info, Share2, ShoppingCart } from "lucide-react";
import Link from "next/link";

const DROP = {
  id: "1",
  name: "Umbreon VMAX",
  price: 1500,
  image: "/images/cards/ES Umbreon VMAX Alt Art PSA 10.png",
  packColor: "yellow",
  totalQuantity: 100,
  remainingQuantity: 37,
  description:
    "Chance to win a PSA 10 Umbreon VMAX Alt Art from Evolving Skies, one of the most sought-after modern Pokémon cards.",
  odds: [
    {
      name: "PSA 10 Umbreon VMAX Alt Art",
      odds: "1:500",
      value: 2500,
      image: "/images/cards/ES Umbreon VMAX Alt Art PSA 10.png",
    },
    {
      name: "PSA 9 Umbreon VMAX Alt Art",
      odds: "1:250",
      value: 1200,
      image: "/images/cards/umbreon-vmax-alt-psa9.png",
    },
    {
      name: "PSA 10 Umbreon VMAX",
      odds: "1:100",
      value: 500,
      image: "/images/cards/umbreon-vmax-psa10.png",
    },
    {
      name: "PSA 9 Umbreon VMAX",
      odds: "1:50",
      value: 250,
      image: "/images/cards/umbreon-vmax-psa9.png",
    },
    {
      name: "PSA 10 Umbreon V",
      odds: "1:25",
      value: 150,
      image: "/images/cards/umbreon-v-psa10.png",
    },
  ],
  recentPulls: [
    { user: "pokemon_master", card: "PSA 9 Umbreon VMAX", time: "2 minutes ago" },
    { user: "cardcollector99", card: "PSA 10 Umbreon V", time: "5 minutes ago" },
    { user: "umbreon_lover", card: "PSA 10 Umbreon VMAX", time: "12 minutes ago" },
  ],
};

export default function DropPage() {
  const [isRipping, setIsRipping] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [pulledCard, setPulledCard] = useState<null | { name: string; image: string }>(null);

  const handleRip = () => {
    setIsRipping(true);
    setTimeout(() => {
      setIsRipping(false);
      setIsRevealed(true);
      const randomIndex = Math.floor(Math.random() * DROP.odds.length);
      const selected = DROP.odds[randomIndex];
      setPulledCard({ name: selected.name, image: selected.image });
    }, 1500);
  };

  const handleRipAgain = () => {
    setIsRevealed(false);
    setPulledCard(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all drops
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Card Display */}
          <div className="flex flex-col items-center justify-center">
            {!isRevealed ? (
              <div className={`relative w-full max-w-md aspect-[3/4] ${isRipping ? "rip-animation" : ""}`}>
                <Image src={DROP.image} alt={DROP.name} fill className="object-contain" />
              </div>
            ) : (
              <div className="card-reveal relative w-full max-w-md aspect-[3/4]">
                <Image
                  src={pulledCard?.image || "/placeholder.svg"}
                  alt={pulledCard?.name || "Revealed Card"}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{pulledCard?.name}</h3>
                </div>
              </div>
            )}

            {!isRevealed ? (
              <Button size="lg" className="mt-8 px-8 py-6 text-lg font-bold" onClick={handleRip} disabled={isRipping}>
                {isRipping ? "Ripping..." : "RIP NOW"}
              </Button>
            ) : (
              <div className="flex flex-col items-center mt-8 space-y-4">
                <h3 className="text-xl font-bold">Congratulations!</h3>
                <p className="text-center text-muted-foreground">You pulled a {pulledCard?.name}</p>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={handleRipAgain}>
                    Rip Again
                  </Button>
                  <Button>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Inventory
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Drop Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{DROP.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-pack-yellow text-black font-bold">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="currentColor" />
                  </svg>
                  {DROP.price.toLocaleString()}
                </Badge>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground">{DROP.description}</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Remaining</h3>
                <span className="text-sm text-muted-foreground">
                  {DROP.remainingQuantity} of {DROP.totalQuantity}
                </span>
              </div>
              <Progress value={(DROP.remainingQuantity / DROP.totalQuantity) * 100} className="h-2" />
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Info className="h-4 w-4 mr-2 text-muted-foreground" />
                  <h3 className="font-medium">Odds</h3>
                </div>
                <div className="space-y-2">
                  {DROP.odds.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{item.odds}</span>
                        <Badge variant="outline" className="font-mono">
                          {item.value}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <h3 className="font-medium">Recent Pulls</h3>
                </div>
                <div className="space-y-3">
                  {DROP.recentPulls.map((pull, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm border-b border-border pb-2 last:border-0 last:pb-0"
                    >
                      <div>
                        <span className="font-medium text-primary">{pull.user}</span>
                        <span className="text-muted-foreground"> pulled </span>
                        <span>{pull.card}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{pull.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}