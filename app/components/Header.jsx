import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="mb-5">
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-900 to-purple-500 text-white h-16">
        <h1 className="text-white text-3xl p-4">Student Portal</h1>
      </div>

      <NavBar />
    </header>
  );
};
export default Header;
