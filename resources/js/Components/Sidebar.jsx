import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

const Sidebar = ({ user }) => {
    const { post, errors, processing } = useForm({});
    const [showTools, setShowTools] = useState(false);

    const logout = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    return (
        <nav className="flex flex-col justify-between h-screen pb-40 mx-10 bg-white shadow-xl w-80 rounded-2xl">
            <div>
                <div className="w-full h-24 flex items-center px-10 border-b-[1px] gap-2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s"
                        alt=""
                        className="w-10 h-10 rounded-full "
                    />
                    <h4 className="text-2xl ">{user.name}</h4>
                </div>
                <div className="flex flex-col gap-4 px-10 py-10 ">
                    <div className=" relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                        <Link href="/">Home</Link>
                    </div>
                    <div className=" relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                        <Link href="/jadwal">Jadwal</Link>
                    </div>
                    {user.role == "doctor" ? (
                        <div className="relative">
                            <div
                                onClick={() => setShowTools(!showTools)}
                                className=" cursor-pointer relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500"
                            >
                                <p>{">"} Tools</p>
                            </div>
                            <div
                                className={`absolute pl-6 top-6 w-52 ${
                                    showTools ? "" : "hidden"
                                }`}
                            >
                                <div className=" relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                                    <Link href="/lc-detection">
                                        Lung Cancer Detection
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className=" relative overflow-hidden nav-item after:h-[1px] after:w-full after:bg-black after:absolute after:right-full after:bottom-0 hover:after:right-0 after:ease-in-out after:duration-500">
                            <Link href="/riwayat">Riwayat</Link>
                        </div>
                    )}
                </div>
            </div>
            <form className="px-10" onSubmit={logout}>
                <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Logout
                </button>
            </form>
        </nav>
    );
};

export default Sidebar;
