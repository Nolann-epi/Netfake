import InputAuth from "@/components/InputAuth";

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50 ">
        <nav className="md:px-12 md:py-5 pt-16">
          <h1 className="text-red-600 text-5xl md:text-4xl h-12 font-extrabold text-center md:text-start">
            NETFAKE
          </h1>
        </nav>
        <div className="flex justify-center pt-20">
          <div className="bg-black bg-opacity-70 px-8 py-8 md:py-12 md:px-12 self-center md:w-2/5 max-w-md rounded-md w-4/5">
            <h2 className="text-white md:text-4xl text-2xl font-semibold pb-8 md:pb-16">
              Sign in
            </h2>
            <div className="flex flex-col space-y-5">
              <InputAuth />
              <InputAuth />
              <InputAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
