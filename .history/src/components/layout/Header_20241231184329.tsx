// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import {  ShoppingCart, User, Home } from 'lucide-react';
import { useAuth } from '../../contexts/useAuth';

export function Header() {
  const { user } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-lg">
      <div className="flex items-center justify-between p-4 mx-auto space-x-6 sm:flex-col md:flex-row max-w-7xl">
        {/* Logo e título alinhados à esquerda */}
        <Link to="/" className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full">
            <span className="text-xl text-white">🍳</span>
          </div>
          <span className="text-xl font-bold">FoodApp</span>
        </Link>

        {/* Barra de navegação alinhada à direita */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="nav-link">
            <Home className="w-6 h-6 hover:text-red-500" />
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
                className="w-10 h-10 bg-gray-200 hover:shadow-lg"
              />
            ) : (
              <User className="w-6 h-6 hover:text-red-500" />
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
}
