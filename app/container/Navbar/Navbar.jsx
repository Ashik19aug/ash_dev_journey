import React from 'react';

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
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 68 0c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330l0 55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"
                            clipRule="evenodd"
                        />
                    </svg>
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
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"></path>
                    </svg>
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