'use client';
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');


  const logar = () => {
    alert(`Logado com sucesso! E-mail: ${email}, Senha: ${password}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <div className="space-y-4">
        <input
          type="email "
          placeholder="Digite o e-mail"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite a senha"
          className="w-full p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button
          onClick={logar}
          className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#5d4037]"
        >
          Calcular
        </button>
      </div>

    </div>
  );
}
  
  