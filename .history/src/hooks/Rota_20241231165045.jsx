import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.tsx";
import { AuthForm } from '../components/AuthForm.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { RestaurantPage } from '../pages/RestaurantPage';
import { Profile } from '../components//layoutprofile/Profile';
const Rota = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/profile" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />

      {/* Rotas privadas */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Rota;
