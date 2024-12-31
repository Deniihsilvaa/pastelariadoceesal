import { Routes, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.tsx";
import { AuthForm } from '../components/AuthForm.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { RestaurantPage } from '../pages/RestaurantPage';
import { Profile } from '../components/layout/profile/Profile';

// Tipagem para as rotas privadas
interface PrivateRouteProps extends RouteProps {
  // Definindo que a propriedade 'element' precisa ser um componente do tipo JSX.Element
  element: JSX.Element;
}

const Rota = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />

      {/* Rotas privadas (exemplo de como você pode usar lógica condicional para rotas privadas) */}
      {user ? (
        <Route path="/profile" element={<Profile />} />
      ) : (
        <Route path="*" element={<HomePage />} />
      )}

      {/* Redirecionamento para a página inicial para qualquer outra rota desconhecida */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Rota;
