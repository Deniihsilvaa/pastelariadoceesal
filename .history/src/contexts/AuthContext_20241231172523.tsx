import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (userData: { name: string; email: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextType['user']>(null);

  const login = (userData: { name: string; email: string }) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


