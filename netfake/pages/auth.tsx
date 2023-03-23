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
          <div className="bg-black bg-opacity-70 px-8 py-8 md:pt-16 md:px-16 self-center md:w-2/5 max-w-md rounded-md w-4/5">
            <h2 className="text-white md:text-4xl text-2xl font-semibold pb-8 md:pb-10">
              Sign in
            </h2>
            <div className="flex flex-col space-y-8">
              <InputAuth placeholder={"Username"}/>
              <InputAuth placeholder={"Password"}/>
            </div>
            <button className="bg-red-600 text-white font-semibold py-4 px-4 rounded-md mt-8 w-full">
              Sign in
            </button>
            <div className="flex justify-center md:pt-12 pt-6">
              <p className="text-white text-base">
                New to Netfake? 
                <span className="hover:text-red-600 font-semibold md:pl-4 pl-2  text-sm md:text-base cursor-pointer">Create an accout</span>
              </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
