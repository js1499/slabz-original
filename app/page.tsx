import { Navbar } from "@/components/navbar";
import { CardPack } from "@/components/card-pack";
import { BestDropsCarousel } from "@/components/best-drops-carousel";
import { SearchFilters } from "@/components/search-filters";

const CARD_PACKS = [
  {
    id: "1",
    name: "Umbreon VMAX",
    price: 1500,
    image: "/images/cards/ES Umbreon VMAX Alt Art PSA 10.png",
    packColor: "yellow",
  },
  {
    id: "2",
    name: "2024 SIR Charizard",
    price: 850,
    image: "/images/cards/PAF Charizard SIR PSA 10.png",
    packColor: "blue",
  },
  {
    id: "3",
    name: "1999 Charizard",
    price: 1750,
    image: "/placeholder.svg",
    packColor: "red",
  },
  {
    id: "4",
    name: "Rayquaza VMAX",
    price: 1250,
    image: "/images/cards/ES Rayquaza VMAX Alt Art PSA 10.png",
    packColor: "green",
  },
  {
    id: "5",
    name: "Pikachu - Felt Hat",
    price: 1000,
    image: "/images/cards/Van Gogh Pika Promo PSA 10.png",
    packColor: "yellow",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-12">
            open packs with graded cards, only on <span className="text-white">slabz</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {CARD_PACKS.map((pack) => (
              <CardPack
                key={pack.id}
                id={pack.id}
                name={pack.name}
                price={pack.price}
                image={pack.image}
                packColor={pack.packColor}
              />
            ))}
          </div>
        </section>

        {/* Best Drops Section */}
        <section className="container py-8">
          <BestDropsCarousel />
        </section>

        {/* Search Filters */}
        <section className="container">
          <SearchFilters />
        </section>

        {/* More Packs Section */}
        <section className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {CARD_PACKS.map((pack) => (
              <CardPack
                key={`more-${pack.id}`}
                id={pack.id}
                name={pack.name}
                price={pack.price}
                image={pack.image}
                packColor={pack.packColor}
              />
            ))}
          </div>
        </section>

        {/* Another Set of Packs */}
        <section className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {CARD_PACKS.map((pack) => (
              <CardPack
                key={`another-${pack.id}`}
                id={pack.id}
                name={pack.name}
                price={pack.price}
                image={pack.image}
                packColor={pack.packColor}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
