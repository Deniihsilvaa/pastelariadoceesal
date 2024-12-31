import { CategoryCard } from '../components/home/CategoryCard';
import { FeaturedRestaurants } from '../components/home/FeaturedRestaurants';
import pastel1 from "../assets/pastel1.jpeg";
import pastel2 from "../assets/pastel2.jpeg";
import pastel3 from "../assets/pastel3.jpeg";
import pasteldoce from "../assets/pasteldoce.jpg";

const categories = [
  { name: 'Simples', image: pastel1 },
  { name: '2 sabores', image: pastel2 },
  { name: 'Especiais', image: pastel3 },
  { name: 'Doce', image: pasteldoce },
];

export function HomePage() {
  return (
    <div className="px-4 pt-20 mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-red-500 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-300 opacity-80"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white animate-fadeInUp">
            Sabor em Cada Mordida
          </h1>
          <p className="mb-6 text-lg text-white delay-100 animate-fadeInUp">
            Peça agora e receba em minutos com entrega grátis
          </p>
          <div className="inline-flex items-center p-1 bg-white rounded-full">
            <input
              type="text"
              placeholder="Busque seu pastel favorito..."
              className="w-full px-6 py-3 text-sm bg-transparent border-none focus:outline-none"
            />
            <button className="px-6 py-3 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Categorias</h2>
          <button className="font-medium text-red-500 hover:underline">
            Ver Todas
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="transition-transform hover:scale-105">
              <CategoryCard name={category.name} image={category.image} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12">
        <h2 className="mb-6 text-3xl font-bold">Destaques</h2>
        <FeaturedRestaurants />
      </section>
    </div>
  );
}
