import React from 'react';

/**
 * Navbar Component
 * 
 * Name: Simranjit Kaur Gill
 * Date: June 17, 2025
 * Description:
 * Renders a fixed navigation bar at the top of the page.
 * Styled using Tailwind CSS with links to Home, Add Student, About, and Student List.
 * This is a static and responsive UI component.
 */

function Navbar() {
  return React.createElement(
    'nav',
    { className: 'bg-gray-800 p-4 fixed w-full' },
    React.createElement(
      'ul',
      { className: 'flex space-x-6 justify-center' },
      ['Home', 'Add Student', 'About', 'Student List'].map((text, index) =>
        React.createElement(
          'li',
          {
            key: index,
            className: 'text-white hover:underline cursor-pointer px-4',
          },
          text
        )
      )
    )
  );
}

export default Navbar;
