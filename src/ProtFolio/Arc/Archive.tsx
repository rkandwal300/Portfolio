import React from 'react'
import { Link } from 'react-router-dom'
import { allData } from '../allData'
import ArchiveItem from './ArchiveItem'
// import Rlogo from '../Project/RLogo.png'

const Archive = () => {
    return (
    <div className=' w-[75%] pt-[160px] mx-[5%] min-h-screen pb-[20px]  flex  flex-col  justify-start items-start  text-gray-300'>

        <header className='px-[30px] h-[80px] fixed z-50  top-0 left-0 w-full back  flex   justify-between items-center pt-[30px] '>

            <Link to='/' >
            <div className='w-[50px] bg-cover  ml-3   '>   
            <img className=' h-full w-full object-contain    ' src='./images/RLogo.png'    alt='logo' width='100%' />    
           
        </div>
                </Link>


            <Link to='/' className=' ml-2 px-2 py-1 borderB textC text-sm font-sans  cursor-pointer font-semibold rounded-[10px] ResH shadow shadow-[#409A39]  '> HOME </Link>

        </header>
    
    <div className='flex flex-col mb-[80px]  '>
            <div style={{ color : 'rgb(204,214,246)' , }} className='text-[50px] fontFM font-bold mb-5'> Archive</div>

            <div style={{fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace', }} className=' text-sm mt-3 fontF  textC'> A big list of things I’ve worked on </div>

    </div>
    <div className='  w-full h-fit bg-red 300 flex flex-col     text-gray-400 '>
        <table className=' flex flex-col  w-full h-fit   text-xl font-semibold     '> 
        <tr className='w-full flex flex-row justify-center items-start mb-3'>
            <td className=' w-[15%] h-full mx-2 text-center textC '> Year </td>
            <td className=' w-[70%] h-full mx-2 text-center textC '> Title </td>
            <td className=' w-[15%] h-full mx-2 text-center textC '> Link </td>
        </tr>
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
        </table>
    </div>
    
    
    </div>
    )
}

export default Archive