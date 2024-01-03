import React from 'react'
import AboutHead from './AboutHead'
import AboutBar from './AboutBar'

export default function HumanLang() {
  return (
    <div className='pt-5'>
        <AboutHead head={'Human Languages'}/>
        <div className='bg-[#225B6F] mx-10 mt-5 py-6 px-8 flex flex-col gap-5 rounded-xl'>
            <AboutBar perc={100} name={'English'}/>
            <AboutBar perc={100} name={'German'}/>
            <AboutBar perc={100} name={'Bulgarian'}/>
            <AboutBar perc={80} name={'Turkish'}/>
        </div>
      
    </div>
  )
}
