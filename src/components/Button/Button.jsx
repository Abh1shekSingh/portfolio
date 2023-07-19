import React from 'react'
import './Button.css'
import { Button as Btn } from 'antd'
function Button({text}) {
  return (
    <Btn className='btn'>{text}</Btn>
  )
}

export default Button