import React from 'react';
import {MainManu, NavbarMainTitle} from "@/app/component";

const Navbar = () => {
    return (
        <nav className="flex flex-wrap top-0 sticky max-w-screen-xl items-center justify-between mx-auto px-4 mb-4">
            <NavbarMainTitle/>
            <MainManu />
            <div className="basis-1/4 flex justify-end">
                {/*<div className="flex items-center bg-amber-400">*/}
                {/*    <p className="text-xs font-light">Ashik</p>*/}
                {/*</div>*/}
                <div>
                    <button type="button"
                            className="text-xs font-light bg-gradient-to-r from-teal-400 to-blue-500 text-white py-1 px-2 rounded">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;