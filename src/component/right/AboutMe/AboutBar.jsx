import React from 'react'

export default function AboutBar({perc,name,know}) {
    const setwid ={
        width: `${perc}%`
    }
  return (
    <div className='flex flex-col gap-2'>
        <h4 className='capitalize text-l font-semibold text-[#fff]'>{name} {perc}%</h4>
        <div className='w-full h-2 rounded-xl bg-[#383838]'>
            <div className='bg-[#FEDB71] h-2 rounded-xl' style={setwid}>

            </div>
        </div>
      
    </div>
  )
}
