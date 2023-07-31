import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import{BsFillPersonLinesFill} from 'react-icons/bs'



const Social = () => {
  const links=[
    {
      id:1,
      child:(
        <>
        LinkeIn <FaLinkedin size={30}/>
        </>
      ),
      href:'https://linkedin.com/in/vaibhav-gahat-23a79b217',
      style:'rounded-tr-md',


      
    },
    {
      id:2,
      child:(
        <>
        GitHub <FaGithub size={30}/>
        </>
      ),
      href:'https://github.com/VaibhavGahat',


      
    },
    {
      id:3,
      child:(
        <>
        Mail <HiOutlineMail size={30}/>
        </>
      ),
      href:'mailto: vaibhav8gahat@gmail.com',
    },
    
    {
      id:4,
      child:(
        <>
        CV <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href:'/Vaibhav_Gahat_IT_CV.pdf',
      style:'rounded-tr-md',
      download:true,


      
    }
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
           {
            links.map(({id,child,href,style,download})=>{
              return (
              <li key={id} className={"flex items-center justify-between w-40 px-4 h-14 ml-[-100px] hover:rounded-md bg-gray-500 hover:ml-[-10px]"+" "+style}>
              <a href={href} className='flex items-center justify-between w-full text-white' download={download} target='_blank' rel="noreferrer">
             {child}
              </a>
            
              
              </li>
              )
              
            }
            )
           }
        </ul>
    </div>
  )
}

export default Social