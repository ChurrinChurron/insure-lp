import Logo from "../assets/logo.svg"
import Burger from "../assets/icon-hamburger.svg"
import Close from "../assets/icon-close.svg"
import "./styles/nav.css"
import { useState } from "react"

const Nav = () => {

  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed z-10 w-full flex justify-between items-center p-6 bg-white lg:px-24 2xl:px-80">
      <img src={Logo} alt="logo" />
      <div className="hidden sm:flex sm:gap-8 sm:items-center sm:ms-auto">
        <a href="#" className="font-semibold font-karla text-gray-500 transition duration-300 hover:text-black">HOW WE WORK</a>
        <a href="#" className="font-semibold font-karla text-gray-500 transition duration-300 hover:text-black">BLOG</a>
        <a href="#" className="font-semibold font-karla text-gray-500 transition duration-300 hover:text-black">ACCOUNT</a>
        <a href="#" className="font-semibold font-karla text-black border-black border-2 p-2 px-6 transition duration-300 hover:bg-black hover:text-white">VIEW PLANS</a>
      </div>
      <button onClick={() => setNav(!nav)}><img src={nav ? Close : Burger} className="sm:hidden" alt="icon burger" /></button>
      <div className={`navMob fixed w-full h-full z-20 top-20 left-0 py-14 px-8 ${nav ? 'visible opacity-100' : 'invisible opacity-0'} transition duration-500 sm:hidden`}>
        <a href="#" className="block mb-8 text-center text-white font-karla text-xl tracking-wider">HOW WE WORK</a>
        <a href="#" className="block mb-8 text-center text-white font-karla text-xl tracking-wider">BLOG</a>
        <a href="#" className="block mb-8 text-center text-white font-karla text-xl tracking-wider">ACCOUNT</a>
        <a href="#" className="block text-center border border-white py-3 text-white font-karla text-xl tracking-wider">VIEW PLANS</a>
      </div>
    </nav>
  )
}

export default Nav