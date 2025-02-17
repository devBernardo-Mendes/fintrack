import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const login = (data: { email: string; senha: string }) => {
    if (
      data.email === "bernardomr1124@gmail.com" &&
      data.senha === "Acesso01*"
    ) {
      navigate("/fintrack/dashboard");
      setError(null);
    } else {
      setError("E-mail ou senha incorretos!");
    }
  };

  return { login, error };
}
