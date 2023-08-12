import React from 'react'
import { AiFillDatabase } from 'react-icons/ai'
import NoteWorthyProject from './NoteWorthyProject'
import ProjectDetail from './ProjectDetail'
import { allData } from '../allData'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
    <div id='Work' className=' w-[94%]    h-fit mb-[120px] mt-[100px]  flex flex-col justify-start  items-start    '>
            <div className=' h-fit  w-full flex flex-col justify-center items-center cursor-default '>
                
                <div className=' flex   w-full flex-row justify-center items-center mb-[50px]  '>
                    <div className='sm:text-[32px] text-[26px] fontF flex  flex-row justify-start items-center  ' > <span className='textC  text-xl mr-3 '> 03.</span>
                    <span style={{ color: 'rgb(200,210,242)', }}  className='text-gray-300 font-bold   '> Some Things I’ve Built</span> </div>
                    <div className='border-t-2 h-1 ml-5 w-[30%]  border-gray-500  hidden sm:block '> </div>
                </div>
            <div className=' w-full h-fit grid  md:grid-cols-2 xl:grid-cols-3  grid-cols-1    '>
                {/* <ProjectDetail /> */}
                {
                    allData.map((val , index)=>{
                        return (
                            <div key = {index} >
                                <NoteWorthyProject 
                                title = {val.title}
                                description =  {val.description}
                                git = { val.github}
                                link ={ val.linl} 
                                language = {val.languages}
                                />
                            </div>
                        )
                    })
                }

            </div>
                
                
                <div className=' px-7 h-fit mt-[50px] w-full flex flex-row justify-center items-center   '>  
                {/* <div>  Some Other Projects :-</div> */} 
                
                <Link to = '/archive'  className=' px-5 py-2 shadow-lg fontF text-[20px] textC borderB ResH   rounded-md  '> Show More </Link>


                </div>

        
        </div>
    </div>
    )
}

export default Project