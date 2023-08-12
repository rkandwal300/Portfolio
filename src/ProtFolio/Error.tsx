import React from 'react'
import { Link } from 'react-router-dom' ;

const Error = () => {
  return (
    <div className=' h-screen w-full back flex flex-col justify-center items-center text-white fixed top-0 left-0 z-50 '>


        <div className='  absolute top-0 h-[70px]  w-full     flex justify-between items-center px-[50px]  '>   
            <Link to='/' >
            <div className='w-[50px] bg-cover  ml-3 mt-2   '>   
            <img className=' h-full w-full object-contain    ' src='./images/RLogo.png'    alt='logo' width='100%' />    
        </div>
            </Link>


            <Link to='/' className=' ml-2 px-2 py-1 borderB textC cursor-pointer font-semibold rounded-sm ResH   '> HOME </Link>

        </div>

        <div className=' flex flex-col justify-center items-center'> 
            <div className='text-5xl font-semibold '> 404 ERROR </div>
            <div className=' my-3 tex-xl   '>  Try another Keyword </div>
        </div>



    </div>
  )
}

export default Error