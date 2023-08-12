import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import About from '../About';

const AboutAnimation = () => {
    const { scrollYProgress } = useViewportScroll()
    const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
    <motion.div
        style={{ opacity }}
    >
        <motion.div
        style={{
            scaleY: scrollYProgress
        }}
        children={<About />}
        />
    </motion.div>
    )
}

export default AboutAnimation