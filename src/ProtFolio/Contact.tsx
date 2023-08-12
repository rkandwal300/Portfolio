import React from 'react'

const Contact = () => {
    return (
    <div id='Contact' className='w-[90%] h-[70vh]  flex  flex-col  justify-start items-center  '>
        <div className=' fontF textC text-[16px] font-400 mb-[40px]   '>  04. What's Next ? </div>

        <div  style={{color: 'rgb(182, 195, 238)'}} className=' nameFont  font-bold text-[40px]  sm:text-[55px] md:[70px]  xl:80px text-slate-100  mb-[30px] '> Get In Touch </div>

        <div style={{color: 'rgb(136,146,176)', lineHeight : '23px',}}     className= 'text-[18px] font-[400] lg:text[20px]  mt-5  w-[80%] mb-[20px]   '>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </div>

        <a  href="https://wa.me/8006073332?text=Hello%20Rahul" rel="noopener noreferrer" target={'_blank'} className=' h-[56px] w-[231px]  fontF text-[14px] textC borderB ResH   rounded-md my-[30px] mb-[50px] grid justify-items-center items-center '>    Say Hello</a>


    </div>
    )
}

export default Contact