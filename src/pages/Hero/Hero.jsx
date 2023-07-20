import React from 'react'
import './Hero.css' 
import avtar from '../../assets/Avtar.svg'
import Work from '../../components/Work/Work'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <>
    <div className='hero'>
        <div className='radialBlur'>
          <div className='tealBlur'></div>
          <div className='primaryBlur'></div>
        </div>
        <div className='hero_content'>
          <motion.h1 initial={{y:-50,opacity:0}} animate={{y:0}} whileInView={{ opacity:1}} transition={{ type:'tween', stiffness:100 }} viewport={{once:true}}>Hi. I'm Abhishek.<br /> A Developer.</motion.h1>
          <motion.p initial={{y:-50, opacity:0}} animate={{y:0,opacity:1}} whileInView={{ opacity:1}} transition={{type:'tween', stiffness:100, delay:0.2}} viewport={{once:true}}>I turn ideas into design and <span>Rasmalai</span> into website.</motion.p>
        </div>
        <motion.img initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}} transition={{type:'tween', delay:0.3}} src={avtar} alt='avatar' />
    </div>
    <Work />
    </>
  )
}

export default Hero