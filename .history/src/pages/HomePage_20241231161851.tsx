// 
import { CategoryCard } from '../components/home/CategoryCard';
import { FeaturedRestaurants } from '../components/home/FeaturedRestaurants';
import pastel1 from "../assets/pastel1.jpeg";
import  pastel2 from "../assets/pastel2.jpeg";
import  pastel3 from "../assets/pastel3.jpeg";
import  pasteldoce from "../assets/pasteldoce.jpg";


const categories = [
  {
    name: 'Simples',
    image: pastel1,
  },
  {
    name: '2 sabores',
    image: pastel2,
  },
  {
    name: 'Especiais',
    image: pastel3,
  },
  {
    name: 'Doce',
    image: pasteldoce,
  },
  
];

export function HomePage() {
  return (
    <div className="px-4 pt-20 mx-auto max-w-7xl">
      {/* Hero Section */}
      <section className="py-12">
        <div className="p-8 text-white bg-red-500 rounded-2xl">
          <h1 className="mb-4 text-4xl font-bold">The Fastest Food Delivery</h1>
          <p className="mb-6 text-lg">Order your favorite meals with free delivery</p>
          <button className="px-6 py-3 font-semibold text-red-500 transition-colors bg-white rounded-full hover:bg-gray-100">
            Order Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Categories</h2>
          <button className="font-medium text-red-500">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </section>

      {/* Featured Restaurants */}
      <FeaturedRestaurants />
    </div>
  );
}