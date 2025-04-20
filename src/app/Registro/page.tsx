'use client';
import { authRegister } from "@/service/register";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const registrar = async () => {
    console.log("Botão de registro clicado!");

    try {
      const result = await authRegister(name, email, password);

      if (result && result.message === "User created successfully") {
        alert(`Registrado com sucesso, ${name}! Clique em OK para ir para a página de Login.`);
        router.push('/Login'); 
      } else {
        alert(result?.message || 'Erro desconhecido ao registrar.');
      }

      console.log('Resposta da API:', result);
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Registro</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Digite o nome"
          className="w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={registrar}
          className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#5d4037]"
        >
          Registrar
        </button>
        <Link href="/Login">
          <button
            type="button"
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
          >
            Ir para Login
          </button>
        </Link>
      </div>
    </div>
  );
}