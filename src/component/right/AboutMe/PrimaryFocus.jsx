import React from 'react'
import AboutHead from './AboutHead'
import AboutCard1 from './AboutCard1'
import web from './Assects/web-dev.svg'
import app from './Assects/mobile-app.svg'
import develop from './Assects/development.svg'
import mark from './Assects/marketing.svg'

export default function PrimaryFocus() {
  return (
    <div>
      <AboutHead head={'Primary Focus'}></AboutHead>
      <div className='flex px-10 pt-5 justify-between gap-6 flex-wrap'>
        <AboutCard1 pic={web} head={'Web Design & Development'} text={'Creating attractive, easy-to-use websites that work well for businesses and individuals online.'}></AboutCard1>
        <AboutCard1 pic={app} head={'Mobile Apps & Games'} text={'Creating and developing engaging mobile apps and games for iOS and Android devices.'}></AboutCard1>
        <AboutCard1 pic={develop} head={'Development Solutions'} text={'Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.'}></AboutCard1>
        <AboutCard1 pic={mark} head={'Marketing & SEO'} text={'Using SEO and marketing strategies to boost online visibility and promote products or services.'}></AboutCard1>
      </div>
    </div>
  )
}
