import React from 'react';
import NavbarCSS from './navbar.module.scss';
import { ActivatableLink } from '../activatable-link/activatable-link';

export function Navbar() {
  return (
    <nav className={NavbarCSS.navbar}>
      <ActivatableLink href="/" activeClass={NavbarCSS.active}>
        <button>Home</button>
      </ActivatableLink>
      <ActivatableLink href="/blog" activeClass={NavbarCSS.active} include>
        <button>Blog</button>
      </ActivatableLink>
      <ActivatableLink href="/about" activeClass={NavbarCSS.active}>
        <button>About</button>
      </ActivatableLink>
      <ActivatableLink href="/contact" activeClass={NavbarCSS.active}>
        <button>Contact</button>
      </ActivatableLink>
    </nav>
  );
}
