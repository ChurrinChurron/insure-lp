import Logo from "../assets/logo.svg"
import Facebook from "../assets/icon-facebook.svg"
import Twitter from "../assets/icon-twitter.svg"
import Pinterest from "../assets/icon-pinterest.svg"
import Instagram from "../assets/icon-instagram.svg"
import "./styles/footer.css"

const Footer = () => {

  return (
    <footer className="py-20 font-karla bg-gray-100 md:py-10 md:px-16 2xl:px-60">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <img src={Logo} alt="logo" />
            <div className="flex items-center justify-center gap-4 my-8">
                <a href="#" className="transition duration-300 hover:brightness-0"><img src={Facebook} alt="facebook" /></a>
                <a href="#" className="transition duration-300 hover:brightness-0"><img src={Twitter} alt="twitter" /></a>
                <a href="#" className="transition duration-300 hover:brightness-0"><img src={Pinterest} alt="pinterest" /></a>
                <a href="#" className="transition duration-300 hover:brightness-0"><img src={Instagram} alt="instagram" /></a>
            </div>
        </div>
        <hr className="w-11/12 mx-auto md:w-full"/>
        <div className="text-center mt-8 md:grid md:grid-cols-2 md:gap-8 lg:flex lg:gap-40 lg:text-left xl:gap-52">
            <div className="block mb-10">
                <h4 className="text-gray-500 font-semibold tracking-wider">OUR COMPANY</h4>
                <br/>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">HOW WE WORK</a>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">WHY INSURE?</a>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">CHECK PRICE</a>
                <a href="#" className="block font-semibold tracking-wider hover:underline">REVIEWS</a>
            </div>
            <div className="block mb-10">
                <h4 className="text-gray-500 font-semibold tracking-wider">HELP ME</h4>
                <br/>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">FAQ</a>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">TERMS OF USE</a>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">PRIVACY POLICY</a>
                <a href="#" className="block font-semibold tracking-wider hover:underline">COOKIES</a>
            </div>
            <div className="block mb-10">
                <h4 className="text-gray-500 font-semibold tracking-wider">CONTACT</h4>
                <br/>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">SALES</a>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">SUPPORT</a>
                <a href="#" className="block font-semibold tracking-wider hover:underline">LIVE CHAT</a>
            </div>
            <div className="block mb-10">
                <h4 className="text-gray-500 font-semibold tracking-wider">OTHERS</h4>
                <br/>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">CAREERS</a>
                <a href="#" className="block font-semibold tracking-wider mb-3 hover:underline">PRESS</a>
                <a href="#" className="block font-semibold tracking-wider hover:underline">LICENSES</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer