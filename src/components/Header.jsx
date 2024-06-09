import Hero from "../assets/image-intro-desktop.jpg"
import BgMobileR from "../assets/bg-pattern-intro-right-mobile.svg"
import BgDesktL from "../assets/bg-pattern-intro-left-desktop.svg"
import BgDesktR from "../assets/bg-pattern-intro-right-desktop.svg"
import "./styles/header.css"

const Header = () => {
  return (
    <header className="relative top-20 mb-56 flex flex-col md:flex-row">
      <img src={BgDesktL} className="hidden md:block md:absolute md:w-[8em] md:top-96" alt="bg-left" />
      <img src={Hero} className="md:absolute z-[1] md:w-[18em] md:right-10 md:top-24 lg:w-[24em] xl:w-[25em] xl:right-36 2xl:right-72" alt="intro" />
      <div className="bgHeader relative bg-darkViolet px-8 py-20 md:w-full md:pt-32 md:ps-16 md:pb-24 xl:ps-40 2xl:ps-80">
        <h1 className="font-dm text-center text-white text-[2.6em] leading-[1.1em] md:text-left md:text-5xl 
                       md:before:content-[''] md:before:w-[2.6em] md:before:h-[.030em] md:before:bg-white md:before:absolute
                        md:before:-translate-x-0 md:before:left-16 md:before:top-20 xl:before:left-40 2xl:before:left-80">Humanizing <br/> your insurance.</h1>
        <p className="text-center py-4 text-white font-karla md:text-left md:max-w-[24em] lg:max-w-[34em]">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        <a href="#" className="block w-36 mt-4 text-center text-white font-karla mx-auto border-white border py-2 px-6 transition duration-300 hover:bg-white hover:text-black
                               md:mx-0">VIEW PLANS</a>
        <img src={BgMobileR}  className="absolute right-0 -bottom-44 md:hidden" alt="bg-right" />
      </div>
      <img src={BgDesktR} className="hidden md:block md:absolute md:z-[2] md:right-0 md:w-[12em] lg:w-[16em] xl:w-[19em]" alt="bg-right" />
    </header>
  )
}

export default Header