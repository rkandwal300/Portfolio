import React ,{ FC } from 'react';
import {  FiGithub , FiInstagram , FiLinkedin, FiStar } from 'react-icons/fi';

type FooterType = {
    children: React.ReactNode;
}
const Footer :FC <FooterType> = ({children}) => {
  return (
    <div>
    <div className=' fontF w-full flex  flex-col sm:flex-row text-lg justify-between items-center  '>

        <div className='  flex  flex-col justify-end items-center fixed  bottom-2 left-2   h-fit mr-3 text-slate-300 '> 
            <a href='https://github.com/rkandwal300' target={"_blank"} className='text-xl hover:translate-y-[-5px]  cursor-pointer  my-3 '> <FiGithub /> </a>   

            <a href='https://www.instagram.com/rkandwal300/?igshid=MDM4ZDc5MmU%3D' target={"_blank"}  className='textH hover:translate-y-[-5px]  cursor-pointer my-3  '> <FiInstagram /> </a>  

            <a href='https://www.linkedin.com/in/rahul-kandwal-015910214/?original_referer=' target={"_blank"}  className='textH hover:translate-y-[-5px]   cursor-pointer my-3 '> <FiLinkedin /> </a>   
            
            <span   className='h-[100px] block     border-l-2 border-gray-400'></span>
        </div> 

        
            <div className=' w-full  '>
                {children}
            </div>

        
        <div className=' h-fit  w-[20px] flex flex-col justify-center items-center fixed bottom-32 right-2    '>
            <div className='   rotate-90 text-lg tracking-wider font-sans text-slate-400 '>  
            <a href="mailto:rahulkandwal707@gmail.com" rel="noopener noreferrer" target="_blank"> rahulkandwal707@gmail.com   </a></div>
            <div className='h-[100px]  w-1  sm:block     border-l-2 translate-y-[120px] border-gray-400'></div> 
        </div>
    </div>

    {/* sm:hidden  */}
        <div className='h-[80px]  w-[90%] flex flex-col justify-center items-center sm:hidden  '>

                <div className='font-semibold text-slate-400   flex flex-row justify-between w-[150px] mb-5 '>
                <a href='https://github.com/rkandwal300' target={"_blank"}  className='text-xl  cursor-pointer hover:translate-y-[-5px] sm:my-3 hover:text-[#63FED9] '> <FiGithub /> </a>    

            <a href='https://www.instagram.com/rkandwal300/?igshid=MDM4ZDc5MmU%3D' target={'_blank'}  className='text-xl hover:translate-y-[-5px] cursor-pointer sm:my-3 font-semibold  hover:text-[#63FED9] '> <FiInstagram /> </a>   

            <a href='https://www.linkedin.com/in/rahul-kandwal-015910214/?original_referer=' target={'_blank'} className='text-xl hover:translate-y-[-5px]  cursor-pointer sm:my-3  hover:text-[#63FED9] '> <FiLinkedin /> </a> 
                </div>

            <div className='flex flex-col mb-5 justify-center items-center'>
            <div className='text-gray-300 fontF border-t-2 border-gray-400 pt-[10px]  mb-1 flex justify-center  items-center '> 
            <div className=' fontH mr-2'><FiStar /> </div> 
            <div className='text-gray-300' >   Designed & Built by Rahul Kandwal  </div>
            <div  className=' fontH ml-1'> <FiStar /> </div> </div>

            </div>
        </div>


    </div>
  )
}

export default Footer


