// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { Search, ShoppingCart, User, Home, Heart } from 'lucide-react';
import { useAuth } from '../../contexts/useAuth';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 m-2 bg-white shadow-md scr">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
            <span className="text-xl text-white">🍳</span>
          </div>
          <span className="text-xl font-bold">FoodApp</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <span className="w-full p-input-icon-left">
            <Search className="w-5 h-5 text-gray-400" />
            <InputText
              placeholder="Buscar seu pastel favorito..."
              className="w-full rounded-full"
            />
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="nav-link">
            <Home className="w-6 h-6 hover:text-red-500" />
          </Link>
          <Link to="/favorites" className="relative nav-link">
            <Heart className="w-6 h-6 hover:text-red-500" />
            <Badge value="3" className="absolute -top-2 -right-2" />
          </Link>
          <Link to="/cart" className="relative nav-link">
            <ShoppingCart className="w-6 h-6 hover:text-red-500" />
            <Badge value="5" className="absolute -top-2 -right-2" />
          </Link>
          <Link to={user ? "/profile" : "/auth"} className="nav-link">
            {user ? (
              <Avatar
                icon="pi pi-user"
                shape="circle"
                size="xlarge"
                className="w-10 h-10 bg-gray-200 hover:shadow-lg"
              />
            ) : (
              <User className="w-6 h-6 hover:text-red-500" />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
