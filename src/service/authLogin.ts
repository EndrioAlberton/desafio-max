// src/services/authLogin.ts
import axios from "axios";

interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  userName?: string;
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
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Erro ao tentar logar.",
    };
  }
}
