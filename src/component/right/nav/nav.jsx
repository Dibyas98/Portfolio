import React from 'react';
import './nav.css';
import Heading from '../Heaading/Heading';

export default function Nav(props) {
  const HandelMenu = (e)=>{
    props.onMenuClick(e.target.innerText)
  }
  return (
    <div className='parent-container relative text-[#FFC663]'>
      <div className='navbar bg-[#284249] w-3/5 float-right h-16 flex items-center px-10 rounded-bl-lg fixed-child'>
        <ul className='flex w-full justify-between text-l font-semibold px-2'>
          <li className='cursor-pointer' onClick={HandelMenu}>About</li>
          <li className='cursor-pointer' onClick={HandelMenu}>Certificates</li>
          <li className='cursor-pointer' onClick={HandelMenu}>Projects</li>
          <li className='cursor-pointer' onClick={HandelMenu}>More</li>
          <li className='cursor-pointer' onClick={HandelMenu}>Contact</li>
        </ul>
      </div>
    </div>
  );
}
