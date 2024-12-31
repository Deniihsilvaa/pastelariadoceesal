// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 p-2 bg-white">{children}</main>
    </div>
  );
};

export default Layout;
