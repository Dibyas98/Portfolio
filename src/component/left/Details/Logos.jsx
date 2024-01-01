import React from 'react'
import { Github,Linkedin,Instagram,Twitter    } from 'lucide-react';

export default function Logos() {
  return (
    <div className='flex w-full justify-between px-16'>
      <Github/>
      <Linkedin/>
      <Instagram/>
      <Twitter/>
    </div>
  )
}
