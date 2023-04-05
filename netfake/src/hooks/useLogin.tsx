import { signIn } from "next-auth/react";
import { useCallback } from "react";

export const useLogin = (email: string, password: string) => {
  const login = useCallback(async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  return login;
};
