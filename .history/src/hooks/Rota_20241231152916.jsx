import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../AuthContext"; // Importa o contexto de autenticação
import { Navigate } from "react-router-dom";

const Rota = () => {
  const { user } = useAuth(); // Obtém o papel do usuário logado

  return (
    <Routes>
      {/* Rota de Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Rotas protegidas para Admin */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute userRole={user?.role} requiredRole="Admin">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<Home />} />
        <Route path="UserRegistrationForm" element={<UserRegistrationForm />} />
        <Route path="registro" element={<DashBoardRegistroColab />} />
        <Route path="cadastroprodutos" element={<CadastroProdutos />} />
        <Route path="nfe" element={<RegistroNotasFiscais />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user" element={<UserOP />} />
        <Route path="user/painel" element={<PainelRegistro />} />
        <Route path="user/financeiro" element={<PainelFinanceiro />} />
        <Route path="mtr" element={<TableMTR />} />
        <Route path="request" element={<DashBoardRequest />} />
      </Route>

      {/* Rotas protegidas para Operacional */}
      <Route
        path="/op/*"
        element={
          <ProtectedRoute userRole={user?.role} requiredRole="Colab">
            <LayoutOp />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<UserOP />} />
        <Route path="painel" element={<PainelRegistro />} />
        <Route path="financeiro" element={<PainelFinanceiro />} />
        <Route path="extrato" element={<ExtratoPGSMensal />} />
        <Route path="extrato/adiantamento" element={<ExtratoPGAMensal />} />
        <Route path="extrato/folha" element={<ExtratoFolhaPonto />} />
        <Route path="user" element={<UserOP />} />
      </Route>

      {/* Outras rotas */}
      <Route path="/NotUse" element={<NotUse />} />
      <Route
        path="*"
        element={
          user ? (
            user.role === "Admin" ? (
              <Navigate to="/admin/home" />
            ) : (
              <Navigate to="/op/home" />
            )
          ) : (
            <div>Carregando...</div>
          ) // Enquanto carrega o usuário
        }
      />
    </Routes>
  );
};

export default Rota;
