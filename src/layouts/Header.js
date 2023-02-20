import React from "react";

export default function Header() {
  return (
    <header className="nav-container">
        <nav className="nav">
      <h1 className="hover-underline-animation header-name">Christina Graham</h1>
      
      <ul className="nav-items">
        <li>
          <a
            href="https://christina-graham.com/"
            className="hover-underline-animation"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://christina-graham.com/myprojects/"
            className="hover-underline-animation"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://christina-graham.com/blog/"
            className="hover-underline-animation"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="https://christina-graham.com/contact/"
            className="hover-underline-animation"
          >
            Contact Me
          </a>
        </li>
      </ul>
      </nav>
    </header>
  );
}
