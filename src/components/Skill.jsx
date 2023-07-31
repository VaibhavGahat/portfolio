import React from 'react'
import html from '../assets/html.png' 
import react from '../assets/react.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
// import next from '../assets/next.png';
// import node from '../assets/node.png';





const Skill = () => {

    const skill = [
        {
            id:1,
            src: html,
            Title:'Hml',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src: css,
            Title:'Css',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src: js,
            Title:'Js',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src: react,
            Title:'React',
            style:'shadow-blue-500',
        },
        {
            id:5,
            src: tailwind,
            Title:'Tailwind',
            style:'shadow-sky-500',
        },
        // {
        //     id:6,
        //     src: node,
        //     Title:'NodeJs',
        //     style:'shadow-green-500',
        // },
        // {
        //     id:7,
        //     src: next,
        //     Title:'NextJS',
        //     style:'shadow-gray-300',
        // },
        {
            id:8,
            src: github,
            Title:'Github',
            style:'shadow-gray-400',
        },
            
        
    ]
  return (
    <div name="skill" className='w-full h-full bg-gradient-to-b from-gray-800 to-black'>
    <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
        <div>
            <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>
              Skills
            </p>
            <p className='py-6'>
                 These are the technologies I've worked with
            </p>
        </div>
        <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>

            {
                skill.map(({id,src,Title,style})=>{
                    return(
                        <div key={id} className={` py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                        <img src={src} alt="" className='object-contain w-20 mx-auto rounded-lg' />
                        <p className='mt-4'> {Title}
                        </p>
                      </div>
                    )
                })
            }

        </div>
    </div>
    </div>
  )
}

export default Skill