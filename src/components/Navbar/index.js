
const { Link } = require("react-router-dom")
import cx from "classnames";
import { useState } from "react";
import {FaHamburger} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const linkStyle = cx(
    "font-semibold | hover:text-primary"
  )
  const navbarNav = cx(
    "xl:flex | ml-auto | space-x-8",
    click ? "block" : "hidden"
  )
  return (
    <nav className="flex items-center | px-10 py-3 ">
      <div className="w-16 xl:w-20 h-16 xl:h-20 bg-primary"></div>
      <button type="button" className="block xl:hidden | ml-auto | p-1 text-primary" onClick={handleClick}>
      <FaHamburger className="text-current text-2xl"/>
      </button>
      <ul className={navbarNav}>
        <li>
          <Link to="/" className={linkStyle}>01. About</Link>
        </li>
        <li>
          <Link to="/" className={linkStyle}>02. Experience</Link>
        </li>
        <li>
          <Link to="/" className={linkStyle}>03. Work</Link>
        </li>
        <li>
          <Link to="/" className={linkStyle}>04. Contact</Link>
        </li>
        <li>
          <Link to="/resume" className="border-2 border-current | py-3 px-8 | text-primary font-semibold | hover:text-black">Resume</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;