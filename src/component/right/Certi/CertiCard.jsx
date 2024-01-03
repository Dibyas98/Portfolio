import React from 'react'

export default function CertiCard(props) {
  return (
    <div>
      <h5 className='text-xl text-[#fff] font-semibold '>{props.top}</h5>
       <p className='text-[#CFD3D4]'>{props.ins}</p>
       <img src={props.pic} alt="" className='w-64 border-8 border-[#202124]'/>
    </div>
  )
}
