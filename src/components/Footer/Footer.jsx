import React from 'react'
import spotify from '../../assets/spotify.svg'
import hand from '../../assets/hand.svg'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer_container'>
    <div className='Footer'>
        
            <div className='song_holder'>
                <a href='https://youtu.be/H5v3kku4y6Q'>
                    <div className='song_content'>
                        <img src={spotify} alt='spotify' />
                        <div className='song_name'>
                            <p>On repeat</p>
                            <h3>As it was - Harry Styles</h3>
                        </div>
                    </div>
                </a>
            </div>
        <div className='socials'>
            <div className='social_children'>
                <ul className='links'>
                    <h4>Explore</h4>
                    <a href='https://github.com/Abh1shekSingh'><li>Github</li></a>
                    <a href='https://www.linkedin.com/in/craftingbugs/'><li>LinkedIn</li></a>
                    <a href='https://leetcode.com/abhishek210702/'><li>Leetcode</li></a>
                    <a href='https://auth.geeksforgeeks.org/user/abhinav210702/practice'><li>Geek For Geeks</li></a>
                </ul>
                <ul className='contact'>
                    <h4>Let's Chat !</h4>
                    <a href='mailto:abhinav210702@gmail.com'><li>Message</li></a>
                </ul>
            </div>
        </div>
        
    </div>
    <img id='hand' src={hand} alt='hand' />    
    </div>
  )
}

export default Footer