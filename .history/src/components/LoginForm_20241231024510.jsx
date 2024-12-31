import React, { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) {
      alert(error.message);
    } else {
      setIsSent(true);
    }
    setIsLoading(false);
  };

  const handleCodeSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token: confirmationCode,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Autenticação bem-sucedida!');
      // Redirecionar para a página inicial após login
    }
    setIsLoading(false);
  };

  return (
    <div>
      {!isSent ? (
        <div>
          <p className="text-gray-600 mb-4">
            Insira seu telefone para receber um código de verificação.
          </p>
          <input
            type="tel"
            placeholder="Número de telefone"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={handlePhoneSubmit}
            className="w-full py-2 bg-blue-500 text-white rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar código'}
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Código de verificação"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button
            onClick={handleCodeSubmit}
            className="w-full py-2 bg-green-500 text-white rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Verificando...' : 'Verificar código'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
