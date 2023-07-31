import React from 'react'
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.jpeg';
import Project3 from '../assets/Project7.jpeg';
import Project4 from '../assets/Project4.png';
import Project5 from '../assets/Project5.jpeg';
import Project6 from '../assets/Project6.png';

const portfolio=[
    {
        id:1,
        src:Project1

    },
    {
        id:2,
        src:Project2

    },
    {
        id:3,
        src:Project3

    },
    {
        id:4,
        src:Project4

    },
    {
        id:5,
        src:Project5

    },
    {
        id:6,
        src:Project6

    },
]

const Portfolio = () => {
  return (
    <div name="portfolio" className='w-full pt-12 text-white bg-gradient-to-b from-black to-gray-800 md:h-full'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'> 
            <div className='pb-8 '>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>



            <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-2 '>
                 {
               
                    
                     portfolio.map(({id,src})=>{
                    return (
                       
                <div  key={id} className='rounded-lg shadow-md shadow-gray-600 '>
                    <img src={src} alt="project" className='object-fill duration-200 rounded-md hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
           
                    )
                })
               }
            </div>
            
         <div/>

            
        </div>
    </div>
  )
}

export default Portfolio;