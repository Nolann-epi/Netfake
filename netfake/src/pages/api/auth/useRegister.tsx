import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import axios from "axios";
import { useLogin } from "./useLogin";

export const useRegister = (username: string, email: string, password: string) => {
    const router = useRouter();
    const login = useLogin(email, password);
  
    const register = useCallback(async () => {
      try {
        await axios.post("/api/register", {
          name: username,
          email,
          password,
        });
        login();
      } catch (error) {
        console.log(error);
      }
    }, [username, email, password, login]);
  
    return register;
  };