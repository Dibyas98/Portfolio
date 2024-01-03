import React from 'react'
import Left from '../left/Left'
import './screen.css'
import Nav from '../right/nav/nav'
import Heading from '../right/Heaading/Heading'
import About from '../right/AboutMe/About'

export default function Screen() {
  return (
    <div className='w-full   bg-[#23D3Ff] flex justify-center pt-10 pb-14  gap-10 cont'>
        <div className=' w-1/6 bg-[#21839C] py-16 rounded-2xl h-3/4 left'>
            <Left></Left>
        </div>
        <div className='bg-[#235777] rounded-xl w-3/5  right'>
          <Nav></Nav>
          <About></About>
        </div>
      
    </div>
  )
}
