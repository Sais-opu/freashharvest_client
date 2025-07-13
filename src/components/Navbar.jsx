

// // const Navbar = () => {
// //     return (
// //         <div
// //             className="w-full flex items-center justify-center bg-cover bg-center relative py-7"
// //             style={{ backgroundImage: "url('https://i.ibb.co/CsK8c624/navbar2.png')" }}
// //         >
// //             {/* Navbar content here */}
// //         </div>

// //     );
// // };

// // export default Navbar;

// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../components/provider/authProvider";
// import logo from '../assets/logo.png';
// import { useContext } from "react";

// const Navbar = () => {
//     const { user, signOutUser } = useContext(AuthContext);

//     const links = (
//         <>
//             <li>
//                 <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                         isActive
//                             ? "inline-block px-4 pb-1 border-b-2 border-green-500 text-black"
//                             : "inline-block px-4 pb-1 text-gray-700 hover:underline"
//                     }
//                 >
//                     Home
//                 </NavLink>
//             </li>


//             <li>
//                 <NavLink
//                     to="/shop"
//                     className={({ isActive }) =>
//                         isActive
//                             ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                             : "px-4 pb-1 hover:underline text-gray-700"
//                     }
//                 >
//                     Shop
//                 </NavLink>
//             </li>

//             <li>
//                 <NavLink
//                     to="/about"
//                     className={({ isActive }) =>
//                         isActive
//                             ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                             : "px-4 pb-1 hover:underline text-gray-700"
//                     }
//                 >
//                     About
//                 </NavLink>
//             </li>

//             <li>
//                 <NavLink
//                     to="/blog"
//                     className={({ isActive }) =>
//                         isActive
//                             ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                             : "px-4 pb-1 hover:underline text-gray-700"
//                     }
//                 >
//                     Blog
//                 </NavLink>
//             </li>




//             {user && user.displayName && (
//                 <li>
//                     <NavLink
//                         to="/dashboard/rental/all-houses"
//                         className={({ isActive }) =>
//                             isActive
//                                 ? "bg-teal-800 text-black px-4 py-2 rounded-md"
//                                 : "hover:bg-indigo-500 hover:underline px-4 py-2 rounded-md"
//                         }
//                     >
//                         All Houses
//                     </NavLink>
//                 </li>
//             )}
//         </>
//     );

//     return (
//         <div className="top-0 z-50 shadow-md">
//             {/* Welcome banner */}
//             {user && user.displayName && (
//                 <div className="bg-sky-700 text-center py-2 text-white">
//                     Welcome, {user.displayName}!
//                 </div>
//             )}

//             {/* Background Image Wrapper */}
//             <div
//                 className="w-full flex items-center justify-center bg-cover bg-center relative "
//                 style={{ backgroundImage: "url('https://i.ibb.co/CsK8c624/navbar2.png')" }}
//             >
//                 {/* Actual Navbar */}
//                 <nav className="navbar w-full px-10">
//                     {/* Start: Logo & Dropdown */}
//                     <div className="navbar-start flex items-center">
//                         <div className="dropdown">
//                             <button tabIndex={0} className="btn btn-ghost lg:hidden">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                                 </svg>
//                             </button>
//                             <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-900 rounded-box w-52">
//                                 {links}
//                             </ul>
//                         </div>

//                         <NavLink to="/" className="flex items-center gap-2 btn btn-ghost normal-case text-lg md:text-xl font-bold">
//                             <img className="w-10 h-10" src={logo} alt="logo" />
//                             <p className="hidden md:block text-black drop-shadow">Fresh Harvest</p>
//                         </NavLink>
//                     </div>

//                     {/* Center: Desktop Menu */}
//                     <div className="navbar-center hidden lg:flex">
//                         <ul className="menu menu-horizontal space-x-4">
//                             {links}
//                         </ul>
//                     </div>

//                     {/* End: Auth buttons / Avatar */}
//                     <div className="navbar-end flex items-center gap-4">
//                         {user && user.photoURL && (
//                             <div className="relative group">
//                                 <img src={user.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />
//                                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-75 py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                                     {user.displayName}
//                                 </div>
//                             </div>
//                         )}

//                         {user && user.displayName ? (
//                             <div>
//                                 <li>
//                                     <NavLink
//                                         to="/favourite"
//                                         className={({ isActive }) =>
//                                             isActive
//                                                 ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                                                 : "px-4 pb-1 hover:underline text-gray-700"
//                                         }
//                                     >
//                                         Favourite
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink
//                                         to="/cart"
//                                         className={({ isActive }) =>
//                                             isActive
//                                                 ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                                                 : "px-4 pb-1 hover:underline text-gray-700"
//                                         }
//                                     >
//                                         Cart
//                                     </NavLink>
//                                 </li>

//                                 <button className="btn bg-teal-800 text-white px-3 py-1" onClick={signOutUser}>
//                                     Log Out
//                                 </button>
//                             </div>


//                         ) : (
//                             <div className="flex gap-2">
//                                 <li>
//                                     <NavLink
//                                         to="/favourite"
//                                         className={({ isActive }) =>
//                                             isActive
//                                                 ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                                                 : "px-4 pb-1 hover:underline text-gray-700"
//                                         }
//                                     >
//                                         Favourite
//                                     </NavLink>
//                                 </li>

//                                 <li>
//                                     <NavLink
//                                         to="/cart"
//                                         className={({ isActive }) =>
//                                             isActive
//                                                 ? "mx-4 pb-1 border-b-2 border-green-500  text-black"
//                                                 : "px-4 pb-1 hover:underline text-gray-700"
//                                         }
//                                     >
//                                         Cart
//                                     </NavLink>
//                                 </li>
//                                 <NavLink to="/register" className="btn bg-teal-900 text-white px-3 py-1">Sign Up</NavLink>
//                                 <NavLink to="/login" className="btn bg-teal-900 text-white px-3 py-1">Log In</NavLink>
//                             </div>
//                         )}
//                     </div>
//                 </nav>
//             </div>



//         </div>
//     );
// };

// export default Navbar;
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/provider/authProvider";
import { useContext } from "react";
import logo from '../assets/logo.png';

const UserAvatar = ({ photoURL, displayName }) => (
    <div className="relative group">
        <img src={photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-75 py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {displayName}
        </div>
    </div>
);

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    // Main nav links (left/middle)
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "inline-block px-4 pb-1 border-b-2 border-green-500 text-black"
                            : "inline-block px-4 pb-1 text-gray-700 hover:underline"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive
                            ? "px-4 pb-1 border-b-2 border-green-500 text-black"
                            : "px-4 pb-1 text-gray-700 hover:underline"
                    }
                >
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "px-4 pb-1 border-b-2 border-green-500 text-black"
                            : "px-4 pb-1 text-gray-700 hover:underline"
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive
                            ? "px-4 pb-1 border-b-2 border-green-500 text-black"
                            : "px-4 pb-1 text-gray-700 hover:underline"
                    }
                >
                    Blog
                </NavLink>
            </li>
            {user?.displayName && (
                <li>
                    <NavLink
                        to="/dashboard/rental/all-houses"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-teal-800 text-white px-4 py-2 rounded-md"
                                : "hover:bg-indigo-500 hover:underline px-4 py-2 rounded-md"
                        }
                    >
                        All Houses
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="top-0 z-50 shadow-md">
            {/* Welcome banner */}
            {user?.displayName && (
                <div className="bg-sky-700 text-center py-2 text-white">
                    Welcome, {user.displayName}!
                </div>
            )}

            {/* Navbar background with image */}
            <div className="w-full bg-[url('https://i.ibb.co/CsK8c624/navbar2.png')] bg-cover bg-center">
                <nav className="navbar w-full px-2 lg:px-10">
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                                aria-label="Mobile Menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-900 rounded-box w-52"
                            >
                                {navLinks}
                            </ul>
                        </div>

                        <NavLink
                            to="/"
                            className="flex items-center gap-2 btn btn-ghost normal-case text-lg md:text-xl font-bold"
                        >
                            <img className="w-10 h-10" src={logo} alt="Logo" />
                            <span className="hidden md:block text-black drop-shadow">
                                Fresh Harvest
                            </span>
                        </NavLink>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-2">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end flex items-center gap-4">
                        {/* Favourite & Cart always shown here */}
                        <NavLink
                            to="/favourite"
                            className={({ isActive }) =>
                                isActive
                                    ? "px-3 pb-1 border-b-2 border-green-500 text-black"
                                    : "px-3 pb-1 text-gray-700 hover:underline"
                            }
                        >
                            Favourite
                        </NavLink>

                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                isActive
                                    ? "px-3 pb-1 border-b-2 border-green-500 text-black"
                                    : "px-3 pb-1 text-gray-700 hover:underline"
                            }
                        >
                            Cart
                        </NavLink>

                        {user?.photoURL && (
                            <UserAvatar photoURL={user.photoURL} displayName={user.displayName} />
                        )}

                        {user?.displayName ? (
                            <button
                                onClick={signOutUser}
                                className="btn bg-teal-800 text-white px-4 py-1"
                            >
                                Log Out
                            </button>
                        ) : (
                            <>
                                <NavLink to="/register" className="btn bg-teal-900 text-white px-3 py-1">
                                    Sign Up
                                </NavLink>
                                <NavLink to="/login" className="btn bg-teal-900 text-white px-3 py-1">
                                    Log In
                                </NavLink>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
