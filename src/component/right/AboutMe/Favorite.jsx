import React from 'react'
import AboutHead from './AboutHead'
import AboutCard1 from './AboutCard1'
import fin from './Assects/finances.png'
import music from './Assects/music.png'
import travel from './Assects/traveling.png'
import camera from './Assects/camera.png'

export default function Favorite() {
  return (
    <div className='pt-5'>
        <AboutHead head={'Favorite Activities'}/> 
        <div className='flex justify-between px-10 pt-5 flex-wrap gap-5'>
            <AboutCard1 pic={fin} head={'Investments'} text={'Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment'}/>
            <AboutCard1 pic={music} head={'Music'} text={'Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians'}/>
            <AboutCard1 pic={travel} head={'Investments'} text={'Exploring new places, learn about different cultures and create lifelong memories.'}/>
            <AboutCard1 pic={camera} head={'Investments'} text={'Capturing precious moments and memories through the lens of a camera.'}/>
        </div>
      
    </div>
  )
}
