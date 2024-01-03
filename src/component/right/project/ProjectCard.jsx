import React from 'react'


export default function ProjectCard(props) {
  return (
    <div className='w-64 p-3 flex flex-col items-center gap-2'>
      <img src={props.pic} alt="img" className='w-full h-2/4 rounded-xl' />
      <h4 className='text-[#fff] font-semibold'>{props.name}</h4>
      <p className='w-2/3 text-center font-semibold text-[#79A7B6]'>{props.des}</p>
      <button className='w-2/3 rounded-md bg-[#226E86] text-[#FFC663]'>{props.show}</button>
    </div>
  )
}
