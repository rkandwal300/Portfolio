import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import { MdClass } from 'react-icons/md'

const Photo = () => {
  return (
    <div className='h-full w-full bg-green-600 ' >

    <div style={ { backgroundColor : 'rgba(63,133,168 , 0.7)'}}  className = 'h-screen md:w-1/2 w-full   absolute  top-0 left-0  z-10     ' ></div>


    <img  className=' h-full w-full  object-cover' src= 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000' width='100%'  />
 
    <div className='h-screen md:w-1/2 w-full   absolute  top-0 left-0  z-40  flex justify-center items-center '>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' text-2xl font-semibold text-white fontFM'> Hey, I'm Rahul. </div>
          <div  className=' text-sm mt-5 mb-1 font-thin  text-white fontFM'>  Web Developer & Web designer.  </div>
          <div className= ' text-sm font-thin  text-white fontFM'> Computer Science Engineer.  </div>
          <div className=' mt-10 flex flex-row '>

            <a href= 'https://www.linkedin.com/in/rahul-kandwal-015910214/?original_referer=' target={'_blank'}   className=' text-2xl text-white' > <AiFillLinkedin />  </a>

            <a href= 'https://instagram.com/rkandwal300?igshid=MDM4ZDc5MmU=' target={'_blank'}  className=' text-2xl mx-4 text-white' > <AiOutlineInstagram />  </a>

            <a href= 'https://github.com/rkandwal300' target={'_blank'} className=' text-2xl text-white'> <AiOutlineGithub />   </a>
            <span>   </span>
          </div>
          </div>
    </div>



    {/* inf0 */}

  </div>
  )
}

export default Photo