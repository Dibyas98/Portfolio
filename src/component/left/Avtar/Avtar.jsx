import React from 'react'
import avtar from "./avatar.jpg";
import './avtar.css'
export default function Avtar() {
  return (
    <div className='flex flex-col items-center gap-2 avtar'>
       <img className="w-5/5 rounded-3xl h-36" src={avtar} alt="" />
      <div>
      <h1 className="text-xl">Dibya</h1>
      <p className="p-1 w-36 text-center rounded-2xl text-gray-50 bg-[#215968]">
        Hello world !
      </p>
      </div>
    </div>
  )
}
