import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { RestaurantCard } from './';

interface Restaurant {
  id: string;
  name: string;
  image_url: string;
  category: string;
  delivery_fee: number;
}

export function FeaturedRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const { data, error } = await supabase
          .from('restaurants')
          .select('*')
          .limit(6);

        if (error) throw error;
        setRestaurants(data || []);
      } catch (error) {
        console.error('Error loading restaurants:', error);
      } finally {
        setLoading(false);
      }
    }

    loadRestaurants();
  }, []);

  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold">Featured Restaurants</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}