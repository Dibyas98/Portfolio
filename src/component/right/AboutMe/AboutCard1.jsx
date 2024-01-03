import React from 'react'

export default function AboutCard1(props) {
  return (
    <div className='w-[400px] flex  bg-[#22687B] rounded-xl p-5 gap-2'>
      <div>
        <img src={props.pic} alt="img" className='w-28 h-14 ' /></div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-semibold text-[#fff]'>{props.head}</h3>
        <p className='text-[#D6D6D6]'>{props.text}</p>
      </div>
    </div>
  )
}
