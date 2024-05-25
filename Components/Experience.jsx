import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import hathi from "../../public/hathi.png"
import node from "../../public/node.png"
import reactjs from "../../public/reactjs.png"
import mongodb from "../../public/mongodb.jpg"
import express from "../../public/express.png"

function Experience() {
  const cardItem=[
   
    {
      id:1,
      logo:java,
      name:"Java"
    },
    {
        id:2,
        logo:html,
        name:"HTML"
      },
      {
        id:3,
        logo:css,
        name:"CSS"
      },
      {
        id:4,
        logo:javascript,
        name:"JavaScript"
      },
      {
        id:5,
        logo:hathi,
        name:"Postgre SQL"
      },
      {
        id:6,
        logo:mongodb,
        name:"MongoDB"
      },
      {
        id:7,
        logo:express,
        name:"Express"
      },
      {
        id:8,
        logo:reactjs,
        name:"ReactJs"
      },
      {
        id:9,
        logo:node,
        name:"NodeJs"
      },

  ]
  return (
    <div name="Experience"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <div>
      <h1 className='text-3xl font-bold mb-5'>Experience</h1>
      <p>
        I've more than 2 years of Experience in below technologies.
      </p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
        {cardItem.map(({ id, logo, name}) => (
            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-100 duration-300' 
            key={id}>
              <img src={logo} 
              className='w-[150px] rounded-full' alt="" />
              <div>
                <div className=''>{name}</div>
              </div>
             
            </div>
          ))
        }

      </div>
    </div>
    </div>
  )
}

export default Experience