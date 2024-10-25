'use client'
import React from 'react';
import {MainManuList} from "@/app/constants/Manus";
import Link from "next/link";
import {usePathname} from "next/navigation";

const MainManu = () => {
    const pathname = usePathname();
    return (
        <div className="basis-1/2 flex justify-center">
            {MainManuList.map((button, index) => (
                <div key={index}>
                    <Link
                        href={button.path}
                        className={`text-xs font-light text-white py-1 px-2 rounded ${
                            pathname === button.path ? "bg-gradient-to-r from-teal-400 to-blue-500" : ""
                        }`}
                    >
                        {button.label}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MainManu;