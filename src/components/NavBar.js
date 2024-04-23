import React from "react";

function NavBar({ links }) {
  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link.toLowerCase()}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
