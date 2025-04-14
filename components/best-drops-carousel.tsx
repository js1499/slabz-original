"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CardItem {
  id: string
  image: string
  name: string
}

const CARDS: CardItem[] = [
  { id: "1", image: "/placeholder.svg?height=120&width=90", name: "Blastoise" },
  { id: "2", image: "/placeholder.svg?height=120&width=90", name: "Charizard" },
  { id: "3", image: "/placeholder.svg?height=120&width=90", name: "Venusaur" },
  { id: "4", image: "/placeholder.svg?height=120&width=90", name: "Pikachu" },
  { id: "5", image: "/placeholder.svg?height=120&width=90", name: "Mewtwo" },
  { id: "6", image: "/placeholder.svg?height=120&width=90", name: "Mew" },
  { id: "7", image: "/placeholder.svg?height=120&width=90", name: "Lugia" },
  { id: "8", image: "/placeholder.svg?height=120&width=90", name: "Ho-Oh" },
]

export function BestDropsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      // Initial check
      checkScrollButtons()

      return () => {
        container.removeEventListener("scroll", checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 300
    const newScrollLeft =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative w-full py-6 bg-muted/30 rounded-lg">
      <div className="flex items-center px-4 mb-4">
        <div className="flex items-center">
          <div className="mr-2 text-blue-400">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400">BEST DROPS</h2>
        </div>
        <div className="ml-auto flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full bg-muted/80", !canScrollLeft && "opacity-50 cursor-not-allowed")}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full bg-muted/80", !canScrollRight && "opacity-50 cursor-not-allowed")}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide pb-4 px-4 gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CARDS.map((card) => (
          <div key={card.id} className="flex-shrink-0 w-[90px] transition-transform duration-300 hover:scale-105">
            <div className="relative w-[90px] h-[120px] rounded-md overflow-hidden">
              <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
