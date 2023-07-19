import React from 'react'
import './Work.css'
import project from '../../constant'

import { LazyLoadImage } from "react-lazy-load-image-component";

function Work() {
  const handleClick = (url) => {
    window.location.assign(url);
  }
 
  return (
    <div className='work'>
        <h3>What Have I <br /> <span>Crafted.</span></h3>
        <div className='card_container'>
            {project.map((item) => (
              <div onClick={() => handleClick(item.live)} style={{backgroundColor:`#${item.color}`}} className='image_holder'>
                <div className='img_content'>
                  <h2 style={{color:`#${item.textcolor}`}}>{item.name}</h2>
                </div>
                  <LazyLoadImage src={item.img} alt ='developer'  />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Work