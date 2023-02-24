import React from 'react';
import './NavBar.css'
import './Main.css'

const NavBar = () => {
  return (
    <header>
      <div className="headings">
        <h3>The Artifact</h3>
        <h4>
          <em>Culture & Art Blog</em>
        </h4>
      </div>

      <nav>
        <ul>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
