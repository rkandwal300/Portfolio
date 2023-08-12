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
    <div className={' h-fit max-w-full  rounded-md shadow-xl bg-gray-800 flex flex-col justify-start  items-center   m-[20px]  p-[20px]  ' +  (hide ? ' translate-y-[-5%] ' :'')}
    onMouseEnter={ onHoverIn}
    onMouseLeave= { onHoverOut }
    >
        <div className=' w-full flex flex-row  justify-between my-3 items-center    '>  
            <div  className=' textC text-4xl  '> <FaProjectDiagram /> </div>
            <div className=' text-2xl flex flex-row'> 
                <a href= {link } className='textH  ' target={'_blank'} > <FiExternalLink /> </a>   
                <a href={git} className='textH  mx-4 ' target={'_blank'} > <FiGithub /> </a>   
            </div>
        </div>

        <div className=' flex flex-col mt-[30px] justify-center items-center px-[10px]'>
            <div className= {' text-gray-300 hover:text-teal-300 fontFM text-[28px] mt-3 font-semibold mb-  ' + (hide ? ' text-teal-300' : '')}> {title} </div>
        
            <p className=' text-gray-300  mt-[40px]' > {description} </p>
            
            <div  style={{ fontFamily : '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace', }} className='flex flex-wrap justify-between items-center  w-full leading-5 fontF mt-[50px] text-gray-300 text-xs '>
                { language.map ((val,index)=>{
                    return ( <div  key = {index}> {val} </div>)
                })} 


            </div>

            </div>
    
    </div>
    )
}

export default NoteWorthyProject