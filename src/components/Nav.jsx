import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const Nav = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    let Links = [
        { name: "Home", link: "/" },
        { name: "Orders", link: "/order" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div>
            <div className={` ${color ? 'w-full fixed top-0 left-0 bg-indigo-50' : 'w-full fixed top-0 left-0 bg-indigo-50'}`}>
                <div className=' md:flex items-center justify-between py-0.5 bg-transparent md:px-10 px-7'>
                    <div className='font-bold font-[Poppins] text-xl  text-slate-800 cursor-pointer flex items-center'>
                            <span className='mr-1'>
                            <Link to="/"> <img src='./Untitled-1.png' className='w-full h-20 active:duration-75 transition-all hover:scale-[1.05]  
                        ease-in-out transform' alt="" /></Link>
                            </span>
                        
                        {/* Direct 2 Hostel */}
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <i className={open ? "fa-solid fa-xl fa-x" : "fa-solid fa-xl fa-bars"}></i>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] px-6 right-0 w-half bg-indigo-50 rounded-md  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-20' : 'top-[-500px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-2xl md:my-0 my-7'>
                                    <Link to={link.link} className='text-gray-600 hover:text-indigo-500 duration-500'>{link.name}</Link>
                                </li>
                            ))
                        }

                        < div >
                            <Link
                                to="/signup"
                                className="md:ml-8 text-xl md:my-0 my-7 text-white w-fit py-1.5 px-4 mx-2 flex items-center 
                                rounded-md bg-indigo-500 cursor-pointer hover:scale-105 duration-300"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    )
}