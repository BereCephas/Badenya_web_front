import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name:"Accueil",link:"/"},
        {name:"A propos",link:"/"},
        {name:"Vie scolaire",link:"/"},
        {name:"Blog",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed h-15 z-30 '>
           <div className='md:flex items-center justify-between bg-marron py-4  2xl:px-40 md:px-20 px-10'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
                <span className='text-white lg:text-3xl 2xl:text-4xl'>Lasalle</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-marron md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-beige hover:text-blue-400 duration-500  lg:text-2xl 2xl:text-3xl'>{link.name}</a>
                    </li>))
                }
                {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;