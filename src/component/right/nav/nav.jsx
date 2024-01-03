import React from 'react';
import './nav.css';
import Heading from '../Heaading/Heading';

export default function Nav() {
  return (
    <div className='parent-container relative text-[#FFC663]'>
      <div className='navbar bg-[#284249] w-3/4 float-right h-16 flex items-center px-10 rounded-bl-lg fixed-child'>
        <ul className='flex w-full justify-between text-l font-semibold px-2'>
          <li className=''>About</li>
          <li>Certificates</li>
          <li>Projects</li>
          <li>More</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
