import React from 'react';
import {Search, Write} from "@/app/utils/svg";

const Navbar = () => {
    return (
        <nav className=" top-0 sticky max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="basis-1/3 flex justify-start">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    ProDev/Ash
                </h1>
            </div>
            <div className="basis-1/3 relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                    <Write/>
                </div>
                <input
                    type="text"
                    id="voice-search"
                    className="bg-transparent border text-white text-sm block w-full ps-10 p-2.5"
                    placeholder="Search what you desire..."
                    style={{
                        borderImage: "linear-gradient(to right, #3b82f6, #22c55e, #6366f1) 1",
                    }}
                />
                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <Search/>
                </button>
            </div>
            <div className="basis-1/3 flex justify-end ">
                <button type="button"
                        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-2 px-6 rounded">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;