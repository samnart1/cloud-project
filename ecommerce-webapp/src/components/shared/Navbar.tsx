import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

    return (
        // lg:px-14 sm:px-8 px-4
        // h-[70px] bg-slate-800 text-white z-50 flex items-center sticky w-476 -mt-8 mb-5
        <div className="lg:px-14 sm:px-8 px-4 bg-slate-800 text-white z-50 h-[70px] flex items-center sticky ">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr-2 text-3xl" />
                    <span className="font-[poppins]">E-Shop</span>
                </Link>
                <ul
                    className={`flex sm:gap-10 gap-4 sm:items-center text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
                        navbarOpen
                            ? "h-fit sm:pb-0 pb-5"
                            : "h-0 overflow-hidden"
                    } transition-all duration-100 sm:h-fit sm:bg-none bg-slate-800 text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0 `}
                >
                    <ul className="flex text text-slate-800 gap-4 items-center">
                        <li className="font-[500] transition-all duration-150">
                            <Link
                                to="/"
                                className={`${
                                    path === "/"
                                        ? "text-white font-semibold"
                                        : "text-gray-200"
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="font-[500] transition-all duration-150">
                            <Link
                                to="/products"
                                className={`${
                                    path === "/products"
                                        ? "text-white font-semibold"
                                        : "text-gray-200"
                                }`}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="font-[500] transition-all duration-150">
                            <Link
                                to="/about"
                                className={`${
                                    path === "/about"
                                        ? "text-white font-semibold"
                                        : "text-gray-200"
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li className="font-[500] transition-all duration-150">
                            <Link
                                to="/contact"
                                className={`${
                                    path === "/contact"
                                        ? "text-white font-semibold"
                                        : "text-gray-200"
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="font-[500] transition-all duration-150">
                            <Link
                                to="/cart"
                                className={`${
                                    path === "/cart"
                                        ? "text-white font-semibold"
                                        : "text-gray-200"
                                }`}
                            >
                                <Badge
                                    showZero
                                    badgeContent={cart?.length || 0}
                                    color="primary"
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                >
                                    <FaShoppingCart size={25} />
                                </Badge>
                            </Link>
                        </li>

                        {user && user.id ? (
                            <li className="font-[500] transition-all duration-150">
                                <UserMenu />
                            </li>
                        ) : (
                            <li className="font-[500] transition-all duration-150">
                                <Link
                                    to="/login"
                                    className="flex items-center space-x-2 px-4 py-[6px] bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold rounded-md shadow-lg hover:from-purple-500 hover:to-red-400 transition duration-300 ease-in-out transform"
                                >
                                    <FaSignInAlt />
                                    <span>Login</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </ul>
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center sm:mt-0 mt-2"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-white text-3xl" />
                    ) : (
                        <IoIosMenu className="text-white text-3xl" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
