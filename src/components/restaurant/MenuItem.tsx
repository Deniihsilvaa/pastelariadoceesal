import { Plus } from 'lucide-react';

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
  };
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex gap-4 p-4 transition-shadow bg-white rounded-lg hover:shadow-md">
      <div className="flex-shrink-0 w-24 h-24">
        <img
          src={item.image_url}
          alt={item.name}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
        <p className="mb-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium">${item.price.toFixed(2)}</span>
          <button className="p-2 text-red-500 transition-colors rounded-full hover:bg-red-50">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}