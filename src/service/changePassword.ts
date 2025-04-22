import axios from "axios";

interface ChangePasswordResponse {
  success: boolean;
  message: string;
}

interface AxiosErrorResponse {
  response?: {
    data?: {
      message: string;
    };
  };
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<ChangePasswordResponse> {
  const token = localStorage.getItem("token");

  if (!token) {
    return {
      success: false,
      message: "Você precisa estar logado para alterar a senha.",
    };
  }

  try {
    const response = await axios.patch(
      "https://login-api.mxqservices.com.br/users/change-password",
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );

    return {
      success: true,
      message: response.data.message || "Senha alterada com sucesso!",
    };
  } catch (error: unknown) {
    const axiosError = error as AxiosErrorResponse;

    return {
      success: false,
      message: axiosError.response?.data?.message || "Erro ao tentar alterar a senha.",
    };
  }
}