import React from 'react'

export default function ButtomNext({next,aft}) {
  const Handelclick =()=>{
    next(aft)
  }
  return (
    <div className='mt-10 pb-12 pr-5'>
      <button className='float-right bg-[#204564] text-[#fff] w-24 h-10 rounded-md' onClick={Handelclick}>Next </button>
    </div>
  )
}
