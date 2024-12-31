import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import { Header } from './components/layout/Header';
import {Rota} from './hooks/Rota';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
      <
      </AuthProvider>
    </Router>
  );
}

export default App;