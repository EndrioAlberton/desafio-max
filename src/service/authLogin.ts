// src/services/authLogin.ts
import axios from "axios";

interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  userName?: string;
}

interface AxiosErrorResponse {
  response?: {
    data?: {
      message: string;
    };
  };
}

export async function authLogin(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await axios.post("https://login-api.mxqservices.com.br/users/login", {
      email,
      password,
    });

    const { token, user } = response.data;

    return {
      success: true,
      message: `Bem-vindo(a), ${user.name}!`,
      token,
      userName: user.name,
    };
  } catch (error: unknown) {
    const axiosError = error as AxiosErrorResponse;

    return {
      success: false,
      message: axiosError.response?.data?.message || "Erro ao tentar logar.",
    };
  }
}
