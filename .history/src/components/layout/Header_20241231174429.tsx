// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

export function Header() {
  return (
    <header className="text-white bg-red-500 shadow-md">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
        <Link to="/" className="text-xl font-bold">
          FoodApp
        </Link>
        <div className="flex space-x-6">
          <Link to="/cart" className="hover:text-gray-200">
            <ShoppingCart />
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            <User />
          </Link>
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-200 top-2 left-2" />
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 bg-transparent border-2 border-white rounded-full focus:outline-none focus:border-gray-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
