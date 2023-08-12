import React from 'react'
import {motion} from 'framer-motion'

const Intro = () => {


    const BoxVariant  = {
        hidden : {
            scale : 0,
        } ,
        visible : {
            scale : 1 ,
            when : "before" ,
        } ,

    }
    
    const ListVariant = {
        hidden : {
            x: -200 ,
            scale : 0,
        } ,
        visible : {
            x :0 ,
            scale : 1 ,
            when : "before" ,
        
            transition :  
            {
            delay : 0.4 ,
            },
        }
    }

    return (
        <>
    <motion.div 
    variants={BoxVariant}
    animate= "visible"
    initial = 'hidden'

    className=' h-screen w-full  bg-contain  '>
        <img className='h-full w-full object-cover  ' src= {'https://ejosue.com/wp-content/uploads/2014/04/thumbnail-1.png'} loading='lazy' alt= 'background'   />

    </motion.div>


    <div   
    className='  h-screen w-full flex justify-center items-center   absolute top-0 left-0  '>

<div style={{fontFamily :  "Playfair Display" ,}}  className=' flex flex-col justify-center items-center  text-5xl font-semibold text-[#ffffff]   '>


    <motion.p 
        initial={{y : -150 ,  opacity :0 ,}}
        animate = { { y : 0 , opacity : 1 ,}}
        transition = {{   type : "spring" ,  stiffness : 1000 ,}}
        className=' my-1'>  Not Your     </motion.p>

    <motion.p 
        initial = { { x : -250 ,  opacity :0 ,}}
        animate = { { x : 0 , opacity : 1 ,}}
        transition = {{   type : "spring" ,  stiffness : 1000 ,}}
        className=' my-1'>  Average     </motion.p>

    <motion.p 
        initial = { { x : 250 ,  opacity :0 ,}}
        animate = { { x : 0 , opacity : 1 ,}}
        transition = {{   type : "spring" ,  stiffness : 1000 ,}}
        className=' my-1'>  Software     </motion.p>

    <motion.p 
            initial = { { x : -250 ,  opacity :0 ,}}
            animate = { { x : 0 , opacity : 1 ,}}
            transition = {{   type : "spring" ,  stiffness : 1000 ,}}
        className=' my-1 mb-3'>  Engineer     </motion.p>
    
    <motion.div 
    initial = { { y : 250 ,  opacity :0 ,}}
    animate = { { y : 0 , opacity : 1 ,}}
    transition = {{   type : "spring" ,  stiffness : 1000 ,}}
    style={{fontFamily : 'Montserrat' , }} className=' flex text-[16px] font-bold  '>
        <p  style={{fontFamily : 'Montserrat' , }}   > Get ready to turn your  </p>
        <p  style={{ fontFamily : "Playfair Display" , }} className='ml-2   font-sans ' > ideas   </p>
        <p  className='mx-2  ' > into   </p>
        <p style={{ fontFamily : "Playfair Display" , }}  >  reality . </p>
    </motion.div>
</div>
</div>




    </>
    )
}

export default Intro