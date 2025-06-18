import React from 'react';

/**
 * Navbar Component
 * 
 * Name: Simranjit Kaur Gill
 * Date: June 17, 2025
 * Description:
 * Simple fixed top navbar with links using Tailwind CSS and Material Icons.
 */

const Navbar = () => {
  const items = [
    { label: 'Home', icon: 'home' },
    { label: 'Add Student', icon: 'person_add' },
    { label: 'About', icon: 'info' },
    { label: 'Student List', icon: 'list' }
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <nav className="fixed top-0 w-full bg-gray-800 p-3 flex justify-center gap-8 shadow-md z-50">
        {items.map(({ label, icon }) => (
          <a
            href="#"
            key={label}
            className="flex items-center gap-1 text-white hover:text-indigo-400 cursor-pointer select-none"
          >
            <span className="material-icons text-base">{icon}</span>
            <span className="text-sm">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;



