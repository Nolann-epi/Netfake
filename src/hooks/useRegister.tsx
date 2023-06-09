import { useRouter } from "next/router";
import { useCallback } from "react";
import axios from "axios";
import { useLogin } from "./useLogin";

export const useRegister = (
  username: string,
  email: string,
  password: string
) => {
  const login = useLogin(email, password);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        name: username,
        email,
        password,
      });
      return login();
    } catch (error: any) {
      if (error.response) {
        return error.response.data;
      }
    }
  }, [username, email, password, login]);

  return register;
};
