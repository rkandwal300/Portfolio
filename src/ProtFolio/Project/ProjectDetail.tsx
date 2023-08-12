import React, { FC, useState } from 'react'

type  PropsType = {
    title       : string,
    description : string,
    git         : string,
    link        : string,
}

const ProjectDetail :FC <PropsType> = ({  title , description, git   ,   link  }) => {
    const [hover , sethover ] = useState( false);
    const handleHoverIn = () =>{ sethover(true); }
    const handleHoverout = () =>{ sethover(false); }
  return (
    <div>
        <div className=' h-fit bg-red-300 w-fit flex-flex-col rounded-md  mx-2'
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverout}
        >
                    <div className='h-[308px] max-w-[390px] bg-contain  bg-green-500 rounded-md  overflow-hidden '>  
                        <img className={'h-[308px] w-[411px] object-cover rounded-t-md ' + ( hover ? '  scale-110 ' : '' ) } src='https://tamalsen.dev/wp-content/uploads/2021/11/tryotel-b2c-cover.jpg' alt='project-1' width='100%' />
                    </div>
                    <div className='w-full pl-5 bg-gray-800 rounded-b-md  h-[90px'> 

                        <div className='text-[20px]  font-bold textH    '>E-commerce </div>
                        <div className=' flex text-gray-400 font-bold text-xs  '>  
                        { !hover ? ( <span > Web Development </span>
                            ):(<span className=' flex flex-row justify-center items-center' > 
                                <span> Show project</span> 
                                <div className='w-[50px] h-1 border-t-2 border-gray-400  ml-3 mt-1  '> </div>   </span> ) }
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ProjectDetail