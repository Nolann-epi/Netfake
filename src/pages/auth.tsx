import InputAuth from "@/components/InputAuth";
import { useCallback, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const Auth = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authMethod, setAuthMethod] = useState<"login" | "register">("login");
  const login = useLogin(email, password);
  const register = useRegister(username, email, password);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleAuthMethod = useCallback(async () => {
    setErrorMessage("");
    setAuthMethod((currentMethod) =>
      currentMethod === "login" ? "register" : "login"
    );
  }, []);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    let response = await login();
    if (response?.error) {
      setErrorMessage(response.error);
    }
  }, [login]);

  const handleRegister = useCallback(async () => {
    if (!username || !email || !password) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    let response = await register();
    if (response?.status !== 200) {
      console.log(response);
      setErrorMessage(response?.message);
    }
  }, [register]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black  bg-opacity-50 ">
        <nav className="pt-8 md:px-12 md:py-5 ">
          <h1 className="h-12 text-center md:text-start text-5xl md:text-4xl text-red-600 font-extrabold ">
            NETFAKE
          </h1>
        </nav>
        <div className="flex justify-center md:pt-20 pt-8">
          <div className="w-4/5 md:w-2/5 self-center max-w-md  px-8 md:px-16 py-8 md:pt-16   bg-black bg-opacity-70 rounded-md">
            <h2 className=" pb-8 md:pb-10  text-2xl md:text-4xl text-white font-semibold">
              {authMethod === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col space-y-8">
              {authMethod === "register" && (
                <InputAuth
                  placeholder={"Username"}
                  type={"username"}
                  onChange={(e) => setUsername(e.target.value)}
                />
              )}
              <InputAuth
                placeholder={"Email"}
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputAuth
                placeholder={"Password"}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {errorMessage && (
                <p className="text-red-600 text-sm pt-2">{errorMessage}</p>
              )}
            </div>
            <button
              onClick={authMethod === "login" ? handleLogin : handleRegister}
              className="w-full py-4 px-4 mt-8  bg-red-600 text-white font-semibold rounded-md"
            >
              {authMethod === "login" ? "Login" : "Create my account"}
            </button>
            <div className="w-full h-10">
              <p
                className={`text-center text-white text-sm pt-4 ${
                  authMethod === "login" ? "" : "hidden"
                }`}
              >
                Guest Account : guest@user.com / guest
              </p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-8 pt-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="flex w-10 h-10 bg-white rounded-full items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle className="text-2xl" />
              </div>
              <div
                className="flex w-10 h-10 bg-white rounded-full items-center justify-center cursor-pointer hover:opacity-80 transition"
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
              >
                <FaGithub className="text-2xl" />
              </div>
            </div>

            <div className="flex justify-center pt-6 md:pt-12">
              <p className="text-white md:text-base text-sm">
                {authMethod === "login"
                  ? "New to Netfake?"
                  : "Already have an account?"}
                <span
                  className="pl-2 md:pl-4 text-sm md:text-base hover:text-red-600 font-semibold cursor-pointer"
                  onClick={() => toggleAuthMethod()}
                >
                  {authMethod === "login" ? "Create an account" : "Sign in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
