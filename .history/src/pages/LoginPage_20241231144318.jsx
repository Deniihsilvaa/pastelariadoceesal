import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Entrar com Telefone
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
