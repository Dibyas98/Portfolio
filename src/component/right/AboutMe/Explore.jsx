import React from 'react'
import AboutHead from './AboutHead'
import AboutCard1 from './AboutCard1'
import visual from './Assects/web-dev.svg'
import digi from './Assects/digi.svg'

export default function Explore() {
  return (
    <div className='pt-5'>
        <AboutHead head={'Exploring Creativity'}></AboutHead>
        <div className='flex justify-between px-10 pt-5 flex-wrap gap-5'>
            <AboutCard1  pic={visual}head={'Visual Storytelling'} text={'Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.'}></AboutCard1>
            <AboutCard1 pic={digi} head={'Digital Content Creation'} text={'Creatiing dynamic digital content, such as 3D models, graphics or animations.'}></AboutCard1>
        </div>
      
    </div>
  )
}
