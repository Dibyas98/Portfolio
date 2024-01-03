import React from 'react'
import AboutBar from './AboutBar'
import AboutHead from './AboutHead'

export default function Program() {
  return (
    <div className='pt-5'>
        <AboutHead head={'Programming Languages'}/>
        <div className='bg-[#225B6F] mx-10 mt-5 py-6 px-8 flex flex-col gap-5 rounded-xl'>
            <AboutBar perc={80} name={'javascript'}></AboutBar>
            <AboutBar perc={50} name={'TypeScript'}></AboutBar>
            <AboutBar perc={40} name={'PHP'}></AboutBar>
            <AboutBar perc={25} name={'Python'}></AboutBar>
            <AboutBar perc={95} name={'CSS'}></AboutBar>
            <AboutBar perc={100} name={'HTML'}></AboutBar>
        </div>

    </div>
  )
}
