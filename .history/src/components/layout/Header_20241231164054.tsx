// 
import { Search, ShoppingCart, User, Home, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
            <span className="text-xl text-white">🍳</span>
          </div>
          <span className="text-xl font-bold">FoodApp</span>
        </Link>
        
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search your favorite food..."
              className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="nav-link">
            <Home className="w-6 h-6" />
          </Link>
          <Link to="/favorites" className="nav-link">
            <Heart className="w-6 h-6" />
          </Link>
          <Link to="/cart" className="nav-link">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <Link to={user ? "/profile" : "/auth"} className="nav-link">
            <User className="w-6 h-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
}