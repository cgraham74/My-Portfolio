import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a
            href="https://christina-graham.com"
            className="hover-underline-animation"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://christina-graham.com/projects"
            className="hover-underline-animation"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://christina-graham.com/blog"
            className="hover-underline-animation"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="https://christina-graham.com/contact"
            className="hover-underline-animation"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}
