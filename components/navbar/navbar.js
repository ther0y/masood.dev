import React from "react";
import NavbarCSS from './navbar.module.css';
import {ActivatableLink} from "../activatable-link/activatable-link";

export function Navbar() {
  return (
    <nav className={NavbarCSS.navbar}>
      <ActivatableLink href="/" activeClass={NavbarCSS.active}>
        <button >Home</button>
      </ActivatableLink>
      <ActivatableLink href="/blog" activeClass={NavbarCSS.active}>
        <button>Blog</button>
      </ActivatableLink>
      <a href="">
        <button>About</button>
      </a>
      <a href="">
        <button>Contact</button>
      </a>
    </nav>
  );
}
