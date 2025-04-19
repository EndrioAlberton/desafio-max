'use client';
import { authLogin } from "@/service/authLogin";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const logar = async () => {
    console.log("Botão clicado!");
    const result = await authLogin(email, password);
    
    if (result.success) {
      localStorage.setItem('token', result.token || '');
      setUserName(result.userName || '');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      {userName ? (
        <div className="text-green-700 text-center font-semibold">
          Bem vindo, {userName}!!
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="email"
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={logar}
            className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#5d4037]"
          >
            Entrar
          </button>
        </div>
      )}
    </div>
  );
}
