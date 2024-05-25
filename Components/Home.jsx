import React from 'react'
import pic from "../../public/mypic.jpeg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>
       <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
           <div className='flex space-x-1 text-2xl md:text-4xl'>
           <h1>Hello, I'm a</h1>
            {/*<span className='text-blue-700 font-bold'>Developer</span>*/}
            <ReactTyped
            className='text-blue-700 font-bold'
            strings={["Developer","Programmer","Coder"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
            />
           </div>
           <br />
            <p className='text-sm md:text-md text-justify'>
            As a skilled Full Stack Developer with a strong foundation in the MERN stack, core Java programming, and database management using PostgreSQL, I aim to leverage my expertise and education (MCA) to contribute to innovative and high-quality software development projects. My objective is to work collaboratively within a dynamic team to create scalable, efficient, and user-friendly applications, continually enhancing my skills and staying abreast of the latest industry trends and technologies.
            </p>
            <br />
            {/* Social media icons */}

           <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
           <div className='space-y-2'>
              <h1 className='font-bold'>Available On</h1>
              <ul className='flex space-x-5 '>
              <li>
              <a href="https://www.facebook.com" target='blank'>
              <FaFacebook className='text-2xl cursor-pointer '/>
              </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>
                <FaLinkedin className='text-2xl cursor-pointer '/> 
                </a>
              </li>
              <li>
              <a href="https://www.youtube.com" target='blank'>
              <FaYoutube className='text-2xl cursor-pointer '/> 
              </a>
              </li>
              <li>
              <a href="https://web.telegram.org/" target='blank'>
              <FaTelegram className='text-2xl cursor-pointer '/> 
              </a>
              </li>
              <li>
              <a href="https://github.com/saquibsayyedcoder" target='blank'>
              <FaGithub className='text-2xl cursor-pointer '/>
              </a>
              </li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Currently Working On</h1>
              <div className='flex space-x-5'>
              <DiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/> 
              <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
              <RiReactjsFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
              <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>


        
              </div>

            </div>
           </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
          <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
       </div>
    </div>

    <hr />
    </>
  )
}

export default Home
