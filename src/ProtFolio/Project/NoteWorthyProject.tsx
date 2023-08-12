import React, { FC, useState } from 'react'
import { AiOutlineFolder } from 'react-icons/ai'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaProjectDiagram } from 'react-icons/fa'


type  PropsType = {
    title       : string,
    description : string,
    git         : string,
    link        : string,
    language    : string [] ,
}

const NoteWorthyProject  :FC <PropsType> = ({  title , description, git   ,   link , language  }) => {
    const [ hide , setHide ] = useState ( false);
    const onHoverIn = () =>{ setHide (true)}
    const onHoverOut = () =>{ setHide (false)}

// console.log ( ' lmguage = ',language)

    return (
    <div className={' min-h-[360px] h-fit max-w-full max  rounded-md shadow-xl bg-gray-800 flex flex-col justify-start  items-center   m-[20px]  p-[20px]    ' +  (hide ? ' translate-y-[-5%] ' :'')}
    onMouseEnter={ onHoverIn}
    onMouseLeave= { onHoverOut }
    >
        <div className=' w-full flex flex-row  justify-between my-3 items-center  '>  
            <div  className=' textC text-4xl  '> <FaProjectDiagram /> </div>
            <div className=' text-2xl flex flex-row'> 
                <a href= {link } className='textH  ' target={'_blank'} > <FiExternalLink /> </a>   
                <a href={git} className='textH  mx-4 ' target={'_blank'} > <FiGithub /> </a>   
            </div>
        </div>

        <div className=' flex flex-col mt-[10px] justify-center items-center px-[0px]'>
            <div className= {' text-gray-300 hover:text-teal-300 fontFM text-[28px] mt-3 font-semibold  ' + (hide ? ' text-teal-300' : '')}> {title} </div>
        
            <p className=' text-gray-300  mt-[40px] text-center' > {description} </p>
            
            <div  style={{ fontFamily : '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace', }} className=' w-full grid grid-cols-3 col-span-5  gap-1  justify-center items-center   leading-5 fontF mt-[50px] text-gray-300 text-xs text-left  '>
                { language.map ((val,index)=>{
                    return ( <div className=' mr-2  px-3' key = {index}>  <div className=' list-item'> {val}</div> </div>)
                })} 


            </div>

            </div>
    
    </div>
    )
}

export default NoteWorthyProject