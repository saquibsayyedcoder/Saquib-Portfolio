import React, { useState } from 'react'
import pic from "../../public/mypic.jpeg"
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import {Link} from "react-scroll"; 


function Navbar() {
    const [menu, setMenu] = useState(false)
    const navItems =[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        },
    ]
  return (
   <>
   {/* Desk Top Navbar */}

   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-purple-300'>
    <div className='flex justify-between items-center h-16'>
        <div className='flex space x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>Saqui 
            <span className='text-purple-500 text-2xl'>b</span>
            <p className='text-sm'>MERN Stack Developer</p>
            </h1>
        </div>
        <div>
            <ul className='hidden md:flex space-x-8'>
                {
                navItems.map(({id, text }) => (
                    <li className='hover:scale-105 duration-200 cursor-pointer' 
                    key={id}>
                    <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'>
                     {text}</Link>
                   </li>
                ))
            }
            </ul>
            <div onClick={() =>setMenu(!menu)} className='md:hidden'>
                {menu ?<ImCross size={24}/>:<FiMenu size={24}/>}
            </div>
        </div>
    </div>

    {/* Mobile NavBar */}

    {menu && (
         <div className='bg-purple-500'>
         <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
         {
         navItems.map(({id, text }) => (
                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                    <Link to={text}
                    onClick={() =>setMenu(!menu)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'>
                     {text}</Link>
                     </li>
                ))
        }
         </ul>
     </div>
    )
    }
   </div>
   </>
  )
}

export default Navbar

