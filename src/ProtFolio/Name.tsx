import React from 'react'

export const Name = () => {
  return (
  <div id= 'Home' className='w-[90%] flex justify-start pl-[50px] xl:pl-[200px]  items-center mt-[100px]   '> 
    <div className=' h-[90vh] ]   flex flex-col justify-center items-start cursor-default pr-[50px]  '>
        <div className=' fontF textC text-[16px] font-400 sm:mb-[40px]  mb-6   '> Hi, my name is </div>

        <div  style={{color: 'rgb(182, 195, 238)' , lineHeight :  '40px',}} className=' nameFont  font-bold text-[40px]  sm:text-[55px] md:[70px]  xl:80px text-slate-100  mb-[30px] fontFM  '> Rahul Kandwal</div>

        <div  style={{color: 'rgb(136,146,176)'}}  className=' nameFont  font-bold text-[40px]  sm:text-[55px] md:[70px]  xl:80px text-slate-100 leading-[50px] fontFM '  > I build things for the web.</div>
        <div style={{color: 'rgb(136,146,176)', lineHeight : '23px',}}     className= 'text-[18px] font-[400] lg:text[20px]  mt-5  max-w-[545px] mb-[20px] fontFM leading-6 text-left '>
        I’m a software engineer specializing in 
        <span className='textC'> Web Development    </span> 
        (and occasionally designing) exceptional web experiences. Currently, I’m focused on  advancing my skills .
        
        </div>

        <a href='https://rahul-profile-react.netlify.app/'  
        target={'_blank'}   className=' h-[56px] w-[231px]  fontF text-[14px] textC borderB ResH   rounded-md my-[30px] mb-[50px] flex justify-center items-center '>    Check out my Profile !</a>
    </div>
  </div>
  )
}