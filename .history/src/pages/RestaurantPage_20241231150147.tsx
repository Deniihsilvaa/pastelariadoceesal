import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/';
import { MenuList } from '../components/restaurant/MenuList';
import { RestaurantHeader } from '../components/restaurant/RestaurantHeader';

interface Restaurant {
  id: string;
  name: string;
  description: string;
  image_url: string;
  category: string;
  delivery_fee: number;
  address: string;
}

export function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRestaurant() {
      try {
        const { data, error } = await supabase
          .from('restaurants')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setRestaurant(data);
      } catch (error) {
        console.error('Error loading restaurant:', error);
      } finally {
        setLoading(false);
      }
    }

    loadRestaurant();
  }, [id]);

  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="px-4 pt-20 mx-auto max-w-7xl">
      <RestaurantHeader restaurant={restaurant} />
      <MenuList restaurantId={restaurant.id} />
    </div>
  );
}