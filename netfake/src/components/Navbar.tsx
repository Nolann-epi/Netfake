import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import Image from "next/image";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setshowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-5 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900/90" : ""
        }`}
      >
        <h1 className="text-red-600 font-extrabold text-2xl">NETFAKE</h1>
        <div className="hidden lg:flex flex-row ml-8 space-x-8">
          <NavbarItem text={"Home"} />
          <NavbarItem text={"Series"} />
          <NavbarItem text={"Films"} />
          <NavbarItem text={"New & Popular"} />
          <NavbarItem text={"My List"} />
          <NavbarItem text={"Browse by languages"} />
        </div>
        <div
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-white cursor-pointer transition">
            <BsSearch className="md:text-xl" />
          </div>
          <div className="text-gray-200 hover:text-white cursor-pointer transition">
            <BsBell className="md:text-xl" />
          </div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={() => setshowAccountMenu(!showAccountMenu)}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                className="w-8 rounded-md"
                src="/images/default-blue.png"
                alt="Profiles"
                width={100}
                height={100}
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
