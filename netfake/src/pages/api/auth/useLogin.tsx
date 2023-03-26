import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useLogin = (email: string, password: string) => {
  const router = useRouter();

  const login = useCallback(async () => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });
      if (result?.ok) {
        router.push("/");
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  return login;
};
