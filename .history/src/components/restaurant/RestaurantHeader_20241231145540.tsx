import { Clock, MapPin, Star } from 'lucide-react';

interface RestaurantHeaderProps {
  restaurant: {
    name: string;
    description: string;
    image_url: string;
    category: string;
    delivery_fee: number;
    address: string;
  };
}

export function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <div className="relative">
      <div className="w-full h-64">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="relative p-6 -mt-20 bg-white rounded-t-3xl">
        <h1 className="mb-2 text-3xl font-bold">{restaurant.name}</h1>
        <p className="mb-4 text-gray-600">{restaurant.description}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            4.5 (500+)
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            20-30 min
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {restaurant.address}
          </span>
          <span className="font-medium text-red-500">
            ${restaurant.delivery_fee.toFixed(2)} delivery fee
          </span>
        </div>
      </div>
    </div>
  );
}