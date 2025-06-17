import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="mb-5">
      <div className="flex justify-center items-center bg-gray-800 text-white h-16 shadow-md">
        <h1 className="text-white p-4">Student Portal</h1>
      </div>

      <NavBar />
    </header>
  );
};
export default Header;
