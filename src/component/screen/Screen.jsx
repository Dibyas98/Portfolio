import React from 'react'
import Left from '../left/Left'
import './screen.css'

export default function Screen() {
  return (
    <div className='w-full  bg-[#23D3FF] flex justify-center pt-10  gap-10 cont'>
        <div className=' w-1/6 bg-[#21839C] py-16 rounded-2xl h-3/4 left'>
            <Left></Left>
        </div>
        <div className='border w-3/5 h-screen'></div>
      
    </div>
  )
}
