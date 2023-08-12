import React, { useState } from 'react'
import {Link}  from 'react-scroll'
import { HiOutlineBars3BottomRight} from "react-icons/hi2";
import { MdOutlineCancel} from "react-icons/md";
import Project from './Project/Project';
// import Rlogo from './Project/Rlogo.png';
// import resume from './resume.pdf'

const Header = () => {
    const [hide , setHide ] = useState(false);

    const Handlemenu = () =>{
        const hidden = !hide
        setHide(hidden);
        console.log ( ' show menu = ',hidden);
    }
  return (
    <div className='h-fit  fixed z-50 top-0  back w-full  text-white flex justify-between py-4   px-6'>
        
        <div className='w-[50px] bg-cover  ml-3 mt-2\1   '>   
            <img className=' h-full w-full object-contain    ' src='./images/RLogo.png'    alt='logo' width='100%' />    
        </div>

            <div className=' sm:hidden  cursor-pointer '  onClick={Handlemenu}>

                <div className='text-3xl mt-1 textC mb-0'> <HiOutlineBars3BottomRight /></div> 
            </div>
        <nav className= {' sm:w-fit sm:h-fit absolute  top-0 left-0 sm:relative sm:top-0 sm:left-0 h-full flex w-full  flex-row justify-between   transition-all  duration-500   '  + (hide? '  top-[0px] '  : ' left-[800px] ' ) }>

            <div className={' w-[20%] h-screen sm:w-fit  sm:h-fit   bg-slate-300/0 ' + (hide? ' ' : ' h-0') }  onClick={Handlemenu}></div>

            <ul className= {'h-screen sm:h-fit    sm:mt-2 sm:justify-evenly sm:items-center w-[80%]  sm:w-fit back  flex flex-col sm:flex-row   justify-evenly items-center  sm:text-[13px]  sm:font-[400] fontF  py-[150px] sm:py-0  '}  >
              {hide?  (<li className=' flex flex-row justify-between items-start  h-fit w-full px-[10%] sm:hidden relative top-[-30%] '> 
                    <div></div>
                <div className=' text-xl textC cursor-pointer '  onClick={Handlemenu}> <MdOutlineCancel className=' text-3xl' /> </div>
                </li>):(<li></li>)}

                <Link  to= 'Home' spy={true} smooth={true} offset={-120} duration={500} >

                <li  className='flex  sm:text-[14px]  font-semibold sm:mx-4 justify-center items-center flex-row mb-1  mr-2 sm:mr-0 sm:mb-0'>
                    <span className='textC mr-2 cursor-pointer  '> 01.</span>
                    <span className='textH cursor-pointer '> Home</span>
                </li> </Link>
                
                <Link  to= 'About' spy={true} smooth={true} offset={-80} duration={500} >

                <li  className='flex  sm:text-[14px] font-semibold sm:mx-4 justify-center items-center flex-row  mr-2  mb-1 sm:mb-0'>
                    <span className='textC mr-2 cursor-pointer '> 02.</span>
                    <span className='textH  cursor-pointer '> About</span>
                </li>
                </Link>


                <Link  to = 'Work' spy={true} smooth={true} offset={-120} duration={500} >

                <li  className='flex  sm:text-[14px] font-semibold sm:mx-4 justify-center items-center flex-row mr-3   my-1 sm:my-0'>
                    <span className='textC mr-2 cursor-pointer '> 03.</span>
                    <span className='textH cursor-pointer ' >  Work </span>
                </li></Link>

                <Link  to='Contact' spy={true} smooth={true} offset={-80} duration={500} >
                <li  className='flex  sm:text-[14px] font-semibold sm:mx-4 justify-center items-center flex-row    my-2 sm:my-0 '>
                    <span className='textC mr-2 cursor-pointer '> 04.</span>
                    <span className='textH cursor-pointer '> Contact </span>
                </li>
                </Link>
                <li className=' mt-2  sm:text-[14px] font-semibold sm:mx-4 mb-8 sm:mb-0 sm:mt-0 ' >  
                    <a target={'_blank'} href='./files/resume.pdf'  className=' ml-2 px-2 py-1 borderB textC cursor-pointer font-semibold rounded-sm ResH   '> Resume </a>
                </li>




            </ul>
            
        </nav>
    </div>
  )
}

export default Header