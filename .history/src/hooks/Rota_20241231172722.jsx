import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.tsx";
import { AuthForm } from '../components/AuthForm.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { RestaurantPage } from '../pages/RestaurantPage';
import { Profile } from '../components/layout/profile/Profile';
const Rota: React.FC<> = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />

      {/* Rotas privadas */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Rota;