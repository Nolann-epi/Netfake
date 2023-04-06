import React from "react";

interface NavbarItemProps {
  text: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ text }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {text}
    </div>
  );
};

export default NavbarItem;
