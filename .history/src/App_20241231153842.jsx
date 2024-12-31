import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AuthForm } from './components/AuthForm.tsx';
import { HomePage } from './pages/HomePage';
import { Header } from './components/layout/Header';
import { RestaurantPage } from './pages/RestaurantPage';
import {Rota} from './hooks/Rota';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;