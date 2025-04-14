import CardDisplay from '@/components/CardDisplay';
import PackDisplay from '@/components/PackDisplay';

const cards = [
  { name: 'Rayquaza VMAX', image: 'ES Rayquaza VMAX Alt Art PSA 10.png' },
  { name: 'Umbreon VMAX', image: 'ES Umbreon VMAX Alt Art PSA 10.png' },
  { name: 'Charizard ex', image: 'PAF Charizard SIR PSA 10.png' },
  { name: 'Van Gogh Pikachu', image: 'Van Gogh Pika Promo PSA 10.png' },
];

const packs = [
  { name: 'Blue Pack', image: 'blue pack.png' },
  { name: 'Green Pack', image: 'green pack.png' },
  { name: 'Red Pack', image: 'red pack.png' },
  { name: 'Yellow Pack', image: 'yellow pack.png' },
];

export default function TestGalleryPage() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-white text-3xl font-bold">Card Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <CardDisplay key={card.name} {...card} />
        ))}
      </div>

      <h1 className="text-white text-3xl font-bold mt-16">Pack Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {packs.map((pack) => (
          <PackDisplay key={pack.name} {...pack} />
        ))}
      </div>
    </div>
  );
}
