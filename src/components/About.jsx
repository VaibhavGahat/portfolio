import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'> 
            <div className='pb-8'>
            <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
                About
            </p>
            </div>
       
        <p className='mt-20 text-xl'>
        •	As a skilled web developer, I specialize in developing visually appealing and highly functional websites. I have a strong foundation in front-end with expertise in HTML, CSS, JS and React JS. 
        I am passionate about creating user-centric web experiences that drive engagement and achieve business goals. 
        </p>
        <br />
        <p className='text-xl'>
        With a keen eye for detail, a collaborative mindset, and a commitment to staying updated with the latest web development trends,
         I am well-equipped to deliver top-quality web solutions.
        </p>
        </div>
    </div>
  )
}

export default About