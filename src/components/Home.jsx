import React from "react";
import Myimage from "../assets/myimage.jpeg";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen overflow-auto bg-gradient-to-b from-black via-black to-gray-800" >
        <div  className="flex flex-row items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
            <div className="flex flex-col justify-center h-full mt-5 ">
                <h2 className="text-2xl font-bold text-white sm:text-4xl">
                    I'm a Full Stack Developer
                </h2>
                 <p className="max-w-md py-4 text-gray-500">
                 My goal is to secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. As a web developer, my objective is to leverage my technical expertise, creative problem-solving skills, 
                 and passion for creating visually appealing and highly functional websites to contribute to the success of an innovative and dynamic organization. 
                </p>

                <div>

                    <Link to='portfolio' smooth={true} duration={500} className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer w-fit bg-gradient-to-r from-cyan-500 to-blue-500 group">
                        Portfolio <span className="duration-300 group-hover:rotate-90"> <BiSolidRightArrowCircle size={30}/></span>
                    </Link>

                </div>

            </div>
                 <div >
                    <img src={Myimage} alt="profile"  className="w-40  mx-auto rounded-2xl  md:w-[45%]"/>
               </div>
        </div>
    </div>
  
  );
};

export default Home;
