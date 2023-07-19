import React from 'react'
import './Hero.css' 
import avtar from '../../assets/Avtar.svg'
import Work from '../../components/Work/Work'

function Hero() {
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // function handleMouse(e) {
  //   // console.log(e)
  //   let it = 0;
  //   const interval = setInterval(() => {
  //     e.target.innerText = e.target.innerText.split("")
  //     .map((letter, index) => {
  //       if(index < it) {
  //         return e.target.dataset.value[index];
  //       }
  //       return letters[Math.floor(Math.random()*26)]
  //     })
  //     .join("");
  //     if(it >= e.target.dataset.value.length) clearInterval(interval);
  //     it += 1 / 3;
  //   }, 30)
  // }
  return (
    <>
    <div className='hero'>
        <div className='radialBlur'>
          <div className='tealBlur'></div>
          <div className='primaryBlur'></div>
        </div>
        <div className='hero_content'>
          <h1>Hi. I'm Abhishek.<br /> A Developer.</h1>
          <p>I turn ideas into design and <span>Rasmalai</span> into website.</p>
        </div>
        <img src={avtar} alt='avatar' />
    </div>
    <Work />
    </>
  )
}

export default Hero