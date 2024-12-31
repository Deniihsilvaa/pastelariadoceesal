import React from 'react';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};



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