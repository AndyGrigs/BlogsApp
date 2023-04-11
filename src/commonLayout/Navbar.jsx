import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="link_nav"to='/about'>About</Link>
      <Link className="link_nav" to='/posts'>Posts</Link>
      <Link className="link_nav" to='/Login'>Login</Link>
    </nav>
  )
}