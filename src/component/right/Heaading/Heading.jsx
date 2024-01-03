import React from 'react'

export default function Heading(props) {
  return (
    <>
    <div className=' h-20 flex items-end text-[#fff]'>
      <h1 className='text-3xl font-bold pl-6'>{props.head}</h1>
    </div>
    <div className='w-16 h-2 bg-[#FFC663] mt-3 ml-5 rounded-full'></div>
    </>
  )
}
