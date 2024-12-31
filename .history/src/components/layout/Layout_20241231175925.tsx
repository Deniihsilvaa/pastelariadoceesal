// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 min-w-screen">
      <Header />
      <main className="flex-1 p-2 bg-white shadow-md">{children}</main>
    </div>
  );
};

export default Layout;
