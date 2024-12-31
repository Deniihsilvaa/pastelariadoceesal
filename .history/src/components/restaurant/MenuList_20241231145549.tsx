import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { MenuItem } from './MenuItem';

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

interface MenuListProps {
  restaurantId: string;
}

export function MenuList({ restaurantId }: MenuListProps) {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenuItems() {
      try {
        const { data, error } = await supabase
          .from('menu_items')
          .select('*')
          .eq('restaurant_id', restaurantId)
          .order('category');

        if (error) throw error;
        setMenuItems(data || []);
      } catch (error) {
        console.error('Error loading menu items:', error);
      } finally {
        setLoading(false);
      }
    }

    loadMenuItems();
  }, [restaurantId]);

  if (loading) {
    return <div className="animate-pulse">Loading menu...</div>;
  }

  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <div className="py-8">
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="mb-4 text-2xl font-bold capitalize">{category}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}