import React ,{FC} from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type  PropsType = {
    year        :number ,
    title       : string,
    git         : string,
    link        : string,
}


const ArchiveItem:FC <PropsType> = ({  year  ,  title,  git  ,  link   }) => {
  return (
    <div>
        <div className='  w-full h-[50px] px-3  flex flex-row text-xl font-semibold    '> 


            <div style={{fontFamily : '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace', }} 
            className=' w-[15%] font-[400] text-[18px] textC h-full'> {year} </div>


            <div style={{ color : 'rgb(204,214,246)' , }}  className=' w-[70%] h-full text-lg '> {title} </div>

            <div className=' w-[15%] h-full'> 
        
                <div className=' text-2xl flex flex-row'> 
                {   link &&(  <a href= {link } className='textH  ' target=      {'_blank'} > <FiExternalLink /> </a> )  }
                {       git && (   <a href={git} className='textH  mx-4 ' target={'_blank'} > <FiGithub /> </a>   )
                }
            </div>

        </div>
        </div>
    </div>
  )
}

export default ArchiveItem