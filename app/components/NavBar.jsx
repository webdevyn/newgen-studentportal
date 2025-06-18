import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-evenly bg-gradient-to-r from-blue-200 to-purple-100 shadow-md rounded-b-lg p-4">
      <div className="flex justify-center items-center space-x-60">
        <a
          href="#StudentList"
          className="hover:underline text-xl font-bold text-gray-700"
        >
          Student List
        </a>
        <a
          href="#AddStudent"
          className="hover:underline text-xl font-bold text-gray-700"
        >
          Add Student
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
