import React from 'react'
import { Link } from 'react-router-dom'
import { allData } from '../allData'
import ArchiveItem from './ArchiveItem'
// import Rlogo from '../Project/RLogo.png'

const Archive = () => {
    return (
    <div className=' w-[85%] pt-[160px] mx-[5%] min-h-screen pb-[20px]  flex  flex-col  justify-start items-start  text-gray-300'>

        <header className='px-[30px] h-[80px] fixed z-50  top-0 left-0 w-full back  flex   justify-between items-center pt-[30px] '>

            <Link to='/' >
            <div className='w-[50px] bg-cover  ml-3   '>   
            <img className=' h-full w-full object-contain    ' src='./images/RLogo.png'    alt='logo' width='100%' />    
            {/* <img className=' h-full w-full object-contain    ' src={Rlogo}    alt='logo' width='100%' />     */}
        </div>
                </Link>


            <Link to='/' className=' ml-2 px-2 py-1 borderB textC cursor-pointer font-semibold rounded-sm ResH   '> HOME </Link>

        </header>
    
    <div className='flex flex-col mb-[80px]  '>
            <div style={{ color : 'rgb(204,214,246)' , }} className='text-[50px] fontFM font-bold mb-5'> Archive</div>

            <div style={{fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace', }} className=' text-sm mt-3 fontF  textC'> A big list of things I’ve worked on </div>

    </div>
    <div className='  w-full h-fit px-3  flex flex-col     text-gray-400 '>
        <div className='  w-full h-[70px] px-3  flex flex-row text-xl font-semibold     '> 
        <div className=' w-[15%]  h-full'> Year </div>
        <div className=' w-[70%] h-full'> Title </div>
        <div className=' w-[15%] h-full'> Link </div>
        </div>
        {
            allData.map((val , index)=>{
                return (
                    <div key={index}>
                        <ArchiveItem 
                        year  ={val.year}
                        title={val.title}
                        git  ={val.github}
                        link   ={val.linl}
                        />
                    </div>
                )
            })
        }
    </div>
    
    
    </div>
    )
}

export default Archive