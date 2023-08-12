import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import About from './About'
import Contact from './Contact'
import { Name } from './Name'
import Project from './Project/Project'
import {Helmet} from "react-helmet";

const MainFooter = () => {

  const { ref : aboutRef, inView : aboutIsVisible  } = useInView();
  const { ref : workRef, inView : workIsVisible  } = useInView();
  const { ref : contactRef, inView : contactIsVisible  } = useInView();

  const control = useAnimation();




  
  return (
    <div className=' flex flex-col h-fit w-full'>
      
        <Name />
        <motion.div 
        animate= {{
          
          opacity : aboutIsVisible ? 1 : 1,
          scale   : aboutIsVisible ? 1 : 1 ,
      }}
      initial={{
          opacity : 0.4 ,
          scale   : 0.5 ,
      }}
      transition ={{
          duration : 0.8 ,   
      }}
      ref={aboutRef}
        > 
        <About  /> </motion.div>
        {/* <Expertise /> */}

        <motion.div 
              animate= {{
                opacity : workIsVisible  ? 1 : 1,
                scale   : workIsVisible  ? 1 : 1 ,
                }}
                initial={{
                    opacity : 0.4 ,
                    scale   : 0.5 ,
                }}
                transition ={{
                    duration : 0.8 ,   
                }}
                ref={workRef}
                > 
                  <Project />
        </motion.div>


        {/* <AboutAnimation /> */}

        <motion.div 
          animate= {{
              
              opacity : contactIsVisible  ? 1 : 1,
              scale   : contactIsVisible  ? 1 : 1 ,
          }}
          initial={{
              opacity : 0.4 ,
              scale   : 0.5 ,
          }}
          transition ={{
              duration : 0.8 ,   
          }}
          ref ={contactRef}
          > 
            <Contact />
        </motion.div>


    </div>
  )
}

export default MainFooter