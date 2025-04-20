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

export async function authRegister(name: string, email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await axios.post("https://login-api.mxqservices.com.br/users/register", {
      name,
      email,
      password,
    });

    if (response.data.message === "User created successfully") {
      return {
        success: true,
        message: response.data.message,
        userName: name, 
      };
    }

    return {
      success: false,
      message: response.data.message || "Erro desconhecido ao registrar.",
    };
  } catch (error: unknown) {
    const axiosError = error as AxiosErrorResponse;

    return {
      success: false,
      message: axiosError.response?.data?.message || "Erro ao tentar registrar.",
    };
  }
}