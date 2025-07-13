import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";
import Store from "./Home/Store";
import visa from '../assets/visa.png'
import pal from '../assets/pal.png'
import apple from '../assets/bkash.png'
import app from '../assets/app.png'
import google from '../assets/google.png'


const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="max-w-8xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Column 1: Logo and Download */}
                {/* <div>
                    <NavLink
                        to="/"
                        className="flex items-center  btn btn-ghost normal-case text-lg md:text-xl font-bold"
                    >
                        <img className="w-10 h-10" src={logo} alt="Logo" />
                        <span className="hidden md:block text-black drop-shadow">Fresh Harvest</span>
                    </NavLink>

                    <Store />
                    
                </div> */}

                <div className="flex flex-col items-start text-left space-y-4">
                    <div className="w-60">
                        <a href="/" className="flex items-center gap-2 text-lg md:text-xl font-bold">
                            <img className="w-10 h-10" src={logo} alt="Logo" />
                            <span className="hidden md:block text-black drop-shadow">Fresh Harvest</span>
                        </a>
                    </div>
                    <div>
                        <p>Download App:</p>
                        <div className="flex gap-2">
                            <a href="#"><img src={app} alt="App Store" /></a>
                            <a href="#"><img src={google} alt="Google Play" /></a>
                        </div>
                    </div>
                </div>


                {/* Column 2: Quick Links */}
                <div>
                    <h6 className="text-xl font-semibold mb-4">Quick Links</h6>
                    <ul className="space-y-2">
                        <li><NavLink to="/" className="hover:text-[#749B3F]">Home</NavLink></li>
                        <li><NavLink to="/shop" className="hover:text-[#749B3F]">Shop</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-[#749B3F]">About</NavLink></li>
                        <li><NavLink to="/blog" className="hover:text-[#749B3F]">Detail Blog</NavLink></li>
                    </ul>
                </div>

                {/* Column 3: Account */}
                <div>
                    <h6 className="text-xl font-semibold mb-4">Account</h6>
                    <ul className="space-y-2">
                        <li><NavLink to="/favorites" className="hover:text-[#749B3F]">Favorites</NavLink></li>
                        <li><NavLink to="/cart" className="hover:text-[#749B3F]">Cart</NavLink></li>
                        <li><NavLink to="/signin" className="hover:text-[#749B3F]">Sign In</NavLink></li>
                        <li><NavLink to="/register" className="hover:text-[#749B3F]">Register</NavLink></li>
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div>
                    <h6 className="text-xl font-semibold mb-4">Contact Us</h6>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <IoIosCall className="text-[#749B3F] text-xl" />
                            <span>1234 5678 90</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IoMailOutline className="text-[#749B3F] text-xl" />
                            <span>Freshharvests@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IoLocationOutline className="text-[#749B3F] text-xl" />
                            <span>Tanjung Sari Street, Pontianak, Indonesia</span>
                        </li>
                    </ul>

                    <h6 className="font-semibold text-lg mt-6">Accepted Payments:</h6>
                    <div className="flex gap-4 mt-3">
                        <img
                            src={visa}
                            width={95}
                            height={67}
                            alt="Visa"
                            className="h-16"
                        />
                        <img
                            src={pal}
                            width={95}
                            height={60}
                            alt="MasterCard"
                            className="h-16"
                        />
                        <img
                            src={apple}
                            width={95}
                            height={65}
                            alt="apple"
                            className="h-16"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Fresh Harvests — All rights reserved by Banana Studio</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center"
                        >
                            <FaTwitter className="text-xl" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center"
                        >
                            <FaFacebookF className="text-xl" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
