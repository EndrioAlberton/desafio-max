import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AxiosErrorResponse {
  response?: {
    data?: {
      message: string;
    };
  };
}

export async function listUsers(): Promise<User[]> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Você precisa estar logado para listar os usuários.");
  }

  try {
    const response = await axios.get("https://login-api.mxqservices.com.br/users/all-users", {
      headers: {
        "x-auth-token": token,
      },
    });

    console.log("Resposta da API:", response.data);

    return response.data.users;
  } catch (error: unknown) {
    const axiosError = error as AxiosErrorResponse;

    throw new Error(axiosError.response?.data?.message || "Erro ao tentar listar os usuários.");
  }
}