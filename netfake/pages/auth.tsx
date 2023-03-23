import InputAuth from "@/components/InputAuth";

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black  bg-opacity-50 ">
        <nav className="pt-16 md:px-12 md:py-5 ">
          <h1 className="h-12 text-center md:text-start text-5xl md:text-4xl text-red-600 font-extrabold ">
            NETFAKE
          </h1>
        </nav>
        <div className="flex justify-center pt-20">
          <div className="w-4/5 md:w-2/5 self-center max-w-md  px-8 md:px-16 py-8 md:pt-16   bg-black bg-opacity-70 rounded-md">
            <h2 className=" pb-8 md:pb-10  text-2xl md:text-4xl text-white font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col space-y-8">
              <InputAuth placeholder={"Username"}/>
              <InputAuth placeholder={"Password"}/>
            </div>
            <button className="w-full py-4 px-4 mt-8  bg-red-600 text-white font-semibold rounded-md">
              Sign in
            </button>
            <div className="flex justify-center pt-6 md:pt-12">
              <p className="text-white text-base">
                New to Netfake? 
                <span className="pl-2 md:pl-4 text-sm md:text-base hover:text-red-600 font-semibold cursor-pointer">Create an accout</span>
              </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
