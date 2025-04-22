'use client';
import { authLogin } from "@/service/authLogin";
import { listUsers } from "@/service/listUsers";
import { changePassword } from "@/service/changePassword"; // Import the changePassword service
import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [showChangePassword, setShowChangePassword] = useState(false); // State for password change form
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const logar = async () => {
    const result = await authLogin(email, password);

    if (result.success) {
      localStorage.setItem('token', result.token || '');
      setUserName(result.userName || '');
    } else {
      alert(result.message);
    }
  };

  const deslogar = () => {
    localStorage.removeItem('token');
    setUserName('');
  };

  const listarUsuarios = async () => {
    try {
      const usersList = await listUsers();
      setUsers(usersList);
      setShowUsersModal(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const handleChangePassword = async () => {
    const result = await changePassword(oldPassword, newPassword);
    alert(result.message);
    if (result.success) {
      setOldPassword('');
      setNewPassword('');
      setShowChangePassword(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#f5f5f5] rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      {userName ? (
        <div className="text-green-700 text-center font-semibold">
          <p>Bem vindo, {userName}!!</p>
          <button
            type="button"
            onClick={listarUsuarios}
            className="w-full bg-[#4e342e] text-white py-2 mt-3 rounded hover:bg-[#5d4037]"
          >
            Listar Usuários
          </button>
          <button
            type="button"
            onClick={() => setShowChangePassword(!showChangePassword)}
            className="w-full bg-[#3b5998] text-white py-2 mt-3 rounded hover:bg-[#2a4373]"
          >
            {showChangePassword ? 'Cancelar' : 'Alterar Senha'}
          </button>
          {showChangePassword && (
            <div className="space-y-4 mt-4">
              <input
                type="password"
                placeholder="Senha atual"
                className="w-full p-2 border border-gray-300 rounded"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Nova senha"
                className="w-full p-2 border border-gray-300 rounded"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={handleChangePassword}
                className="w-full bg-[#4e342e] text-white py-2 rounded hover:bg-[#5d4037]"
              >
                Confirmar Alteração
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={deslogar}
            className="w-full bg-[#742525] text-white py-2 mt-3 rounded hover:bg-[#742525d9]"
          >
            Deslogar
          </button>
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

      {showUsersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-[#f5f5f5] p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Usuários Cadastrados</h2>
            <ul className="space-y-2">
              {users.map((user: User) => (
                <li key={user.id} className="border-b pb-2">
                  <p><strong>Nome:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setShowUsersModal(false)}
              className="w-full bg-gray-500 text-white py-2 mt-4 rounded hover:bg-gray-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}