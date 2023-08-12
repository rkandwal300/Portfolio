import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/src/';
// import Rahul_Resume  from 'Rahul_Resume.pdf'

export const Information = () => {

    return (
<div className=' h-full w-full '>

    {/* intro  */}
    <div className=' flex flex-row justify-start items-start'>

        <div className='w-[15%] text-xs font-semibold text-indigo-500  mt-3 mr-7 '>
            INTRO
        </div>

        <div className=' w-[85%] flex flex-col text-[13px] leading-6 text-gray-600    '>
            <div className='mb-2'> I'm currently in my third year (out of four) studying computer science engineering and web development.</div>
            
            <div className='mb-2'> I enjoy being the bridge between engineering and design, and feel right at home as a front end engineer. I'm experienced in developing and designing products for the web, from simple landing pages to full-fledged web apps.</div>


            <div className='mb-6 leading-7 font-semibold text-sky-500'>
            I'm currently looking for advancing my current skills  before I graduate in 2024!
            </div>

            {/* <div className = ' font-semibold text-gray-800 ml-' >heading </div> */}

        </div>

    </div>

    {/* skills */}
    <div className=' mb-5 flex flex-row justify-start items-start'>

        <div className='w-[15%] text-xs font-semibold text-indigo-500  mt-2 mr-7 '>
            SKILLS
        </div>

        <div className=' w-[85%] flex flex-col text-[13px] leading-5 text-gray-600    '>


            <div className='mb-3 '>
                <span className=' font-semibold text-gray-700 mr-2 text-xs mt-[7px] h-20px w-36  '> LANGUAGES :</span>
                <span>  
                JavaScript (ES6), TypeScript, Redux, HTML5, CSS3, C React .
                </span>
                

            </div>


            <div className='mb-3 '>
                <span className=' font-semibold text-gray-700 mr-2 text-xs mt-[7px] h-20px w-36  '> LIBRARIES & FRAMEWORKS :
                </span>
                <span>  
                jQuery, Bootstrap, Foundation , React .
                </span>
                

            </div>


            <div className='mb-3 '>
                <span className=' font-semibold text-gray-700 mr-2 text-xs mt-[7px] h-20px w-36  '> TOOLS :
                </span>
                <span>  
                Git & Github, Command Line,  Postman, Adobe Photoshop, Adobe XD .
                </span>
                

            </div>


        </div>

    </div>

    {/* education */}
    <div className=' flex flex-row justify-start items-start'>

        <div className='w-[15%] text-xs font-semibold text-indigo-500  mt-3 mr-7 '>
        EDUCATION
        </div>

        <div className=' w-[85%] flex flex-col text-[13px] leading-5 text-gray-600    '>

        <div className=' font-semibold text-gray-700 mr-2 text-xs mt-[7px] '>
            <div>  Doon Group of Institutions </div>
            <div className='my-2 font-serif'> ( Uttarakhand Technical University ) </div>
            
        </div>

        <div className='mb-3 mt-2 '>
                <span className=' font-semibold text-gray-700 mr-2 text-xs mt-[7px] h-20px w-36  '> 
                Graduation In :
                </span>

                <span className='flex flex-wrap'> 
                    <div>     
                    Bachelor of Technology 
                    </div>

                    <div className='text-sky-400 ml-2' >( B.Tech)</div>
                </span>
                

        </div>


        <div className='mb-3  font-semibold text-gray-500'> 
            EXPECTED GRADUATION: MAY 2024
        </div>


        </div>

    </div>

    {/* expeiewnce */}
    <div className=' mb-4 flex flex-row justify-start items-start'>

        <div className='w-[15%] text-xs font-semibold text-indigo-500  mt-1 mr-7 '>
        EXPERIENCE
        </div>

        <div className=' w-[85%] flex flex-col font-semibold text-[13px] leading-5 text-gray-600  mt-[1px]   '>
        <div > FRESHER </div>
        <div  className=' font-medium  text-sky-400'> Looking for a job which help me to enhance my skills </div>
        </div>

    </div>


    {/* projects  */}
    <div className=' mt-7 flex flex-row justify-start items-start'>

        <div className='w-[15%] text-xs font-semibold text-indigo-500  mt-2 mr-7 '>
        PROJECTS
        </div>

        <div className=' w-[85%] flex flex-col text-[13px] leading-5 text-gray-600    '>


        <div className='mb-5 '>
            <span className=' font-bold text-gray-700 mr-2 text-xs h-20px w-36  '> Portfolio :</span>
            <span>  
            Portfolio site designed and coded from scratch to showcase my skills and past work
            </span>
        

        </div>


        <div className='mb-5 '>
            <span className=' font-bold text-gray-700 mr-2 text-xs h-20px w-36  '> my easy cart :</span>
            <span>  
            Web app built on the React TypeScript for my web development class. Created with the intention of providing customers a better experience of Shopping .
            </span>
        

        </div>

        <div className='mb-5 '>
            <span className=' font-bold text-gray-700 mr-2 text-xs h-20px w-36  '> Todo List :</span>
            <span>  
            Web app built on the React TypeScript for my web development class. Created with the intention of helping student complete their daily work which neede to done .
            </span>
        

        </div>



</div>

    </div>


    <div className='  h-[70px] w-full flex justify-center items-center  '>  
        <a href= '#' target={'_blank'} className='  flex justify-center items-center text-md font-semibold text-sky-600 border-2 border-gray-300 rounded-md px-[30px] py-[7px] bg-gray-200  shadow-md  hover:shadow-xl hover:bg-gray-300  '>
        GRAB  A PDF OF MY FULL RESUME
        </a>
    </div>


</div>

    )
}
