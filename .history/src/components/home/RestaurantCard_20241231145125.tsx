import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    image_url: string;
    category: string;
    delivery_fee: number;
  };
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block group">
      <div className="overflow-hidden transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
        <div className="relative aspect-video">
          <img
            src={restaurant.image_url}
            alt={restaurant.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute px-2 py-1 text-sm font-medium bg-white rounded-full top-3 right-3">
            ${restaurant.delivery_fee.toFixed(2)} delivery
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold group-hover:text-red-500">
            {restaurant.name}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              4.5 (500+)
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              20-30 min
            </span>
            <span>{restaurant.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}