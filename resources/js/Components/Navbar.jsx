import { Link, useForm } from "@inertiajs/react";
import React, { FormEventHandler, useEffect, useState } from "react";

const Navbar = ({user}) => {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const { post, errors, processing } = useForm({});

    const logout = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between p-4 px-20 mx-auto ">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Pulmo
                    </span>
                </a>
                <div className="flex gap-5 md:order-2 ">
                    <div className="relative md:block">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Search..."
                        />
                    </div>
                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        aria-controls="navbar-search"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="relative rounded-full ">
                        <img
                            onClick={() => {
                                console.log(!isOpenNav);
                                setIsOpenNav(!isOpenNav);
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s"
                            alt=""
                            className="w-10 rounded-full "
                        />
                        <div
                            className={` ${
                                isOpenNav ? "" : "hidden"
                            } z-50 absolute flex flex-col top-20 right-0 text-[#0d3633] w-80 rounded-xl bg-gradient-to-r backdrop-blur-lg to-[#05966869] from-[#38bff86c] px-3 `}
                        >
                            <div className="w-full border-b-[1px] border-[#0d3633] p-3 ">
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                            <div className="flex flex-col gap-2 p-5 ">
                                <div className="relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                                    <Link href="/">Home</Link>
                                </div>
                                <div className="relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                                    <Link href="/riwayat">Riwayat</Link>
                                </div>
                                <div className="relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                                    <Link href="/jadwal">Jadwal</Link>
                                </div>
                                <div className="relative py-5 overflow-hidden nav-item">
                                    <form className="" onSubmit={logout}>
                                        <button
                                            type="submit"
                                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Logout
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
