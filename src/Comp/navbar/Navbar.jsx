import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="link_nav"to='/'>About</Link>
      <Link className="link_nav" to='/posts'>Posts</Link>
    </nav>
  )
}