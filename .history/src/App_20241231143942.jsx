import React from 'react';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AuthForm } from './components/AuthForm';
import { HomePage } from './pages/HomePage';
import { Header } from './components/layout/Header';
import { RestaurantPage } from './pages/RestaurantPage';

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