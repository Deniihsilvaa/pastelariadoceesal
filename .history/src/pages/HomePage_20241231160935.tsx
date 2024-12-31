import { CategoryCard } from '../components/home/CategoryCard';
import { FeaturedRestaurants } from '../components/home/FeaturedRestaurants';

const categories = [
  {
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
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