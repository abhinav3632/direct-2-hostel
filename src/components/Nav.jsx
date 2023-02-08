import React, { useState } from 'react'
// import  Button  from "./Button";
import d2hlogo from "../asset/Untitled-1.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import './Nav.css';

export const Nav = () => {
    //change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true);
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Locations", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Contact", link: "/" }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div>
            <div className={color ? 'w-full fixed top-0 left-0 bg-white' : 'w-full fixed top-0 left-0 bg-tranparent'}>
                    <div className='md:flex items-center justify-between py-0.5 bg-transparent md:px-10 px-7'>
                        <div className='font-bold font-[Poppins] text-xl  text-slate-800 cursor-pointer flex items-center'>
                            <span className='mr-1'>
                                <img src={d2hlogo} className='w-full h-20' alt="" />
                            </span>
                            {/* Direct 2 Hostel */}
                        </div>
                        <div onClick={() => setOpen(!open)} className='text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
                            <i class={open ? "fa-solid fa-xl fa-x" : "fa-solid fa-xl fa-bars"}></i>
                        </div>
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] px-6 right-0 w-half bg-transparent rounded-md  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-20' : 'top-[-500px]'}`}>
                            {
                                Links.map((link) => (
                                    <li key={link.name} className='md:ml-8 text-2xl md:my-0 my-7'>
                                        <a href={link.link} className='text-gray-900 hover:text-gray-500 duration-500'>{link.name}</a>
                                    </li>
                                ))
                            }
                            {/* <Button>
                            Sign Up For Free
                        </Button> */}
                        </ul>
                    </div>
                </div>
            </div>
    )
}


// import React, { useState } from "react";
// import d2hlogo from "../asset/Untitled-1.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

// export const Nav = () => {
//     const [nav, setNav] = useState(false);

//     const links = [
//         {
//             id: 1,
//             link: "home",
//         },
//         {
//             id: 2,
//             link: "about",
//         },
//         {
//             id: 3,
//             link: "locations",
//         },
//         {
//             id: 4,
//             link: "pricing",
//         },
//         {
//             id: 5,
//             link: "contact",
//         },
//     ];

//     return (
//         <div className="shadow-md flex justify-between items-center w-full h-20 px-4 text-white fixed">
//             <div>
//                 <div className='font-bold font-[Poppins] text-slate-800 cursor-pointer flex items-center'>
//                     <span className='mr-1'>
//                         <img src={d2hlogo} className='w-full h-20' alt="" />
//                     </span>
//                     {/* <h1 className="text-3xl ml-2">Direct 2 Hostel</h1> */}
//                 </div>
//             </div>

//             <ul className="hidden md:flex">
//                 {links.map(({ id, link }) => (
//                     <li
//                         key={id}
//                         className="px-4 text-xl cursor-pointer capitalize font-[Poppins] text-gray-800 hover:scale-105 duration-200"
//                     >
//                         <Link to={link} smooth duration={500}>
//                             {link}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             <div
//                 onClick={() => setNav(!nav)}
//                 className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//             >
//                 {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//             </div>

//             {nav && (
//                 <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
//                     {links.map(({ id, link }) => (
//                         <li
//                             key={id}
//                             className="px-4 cursor-pointer capitalize py-6 text-4xl"
//                         >
//                             <Link
//                                 onClick={() => setNav(!nav)}
//                                 to={link}
//                                 smooth
//                                 duration={500}
//                             >
//                                 {link}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Nav;