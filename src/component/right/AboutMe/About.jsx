import React from 'react'
import Heading from '../Heaading/Heading'
import AboutText from './AboutText'
import PrimaryFocus from './PrimaryFocus'
import Explore from './Explore'
import Program from './Program'
import HumanLang from './HumanLang'
import Favorite from './Favorite'
import ButtomNext from '../Heaading/ButtomNext'

export default function About() {
  return (
    <div className='pb-10'>
      <Heading head={'About Me'}></Heading>
      <AboutText></AboutText>
      <PrimaryFocus></PrimaryFocus>
      <Explore></Explore>
      <Program></Program>
      <HumanLang></HumanLang>
      <Favorite></Favorite>
      <ButtomNext></ButtomNext>
    </div>
  )
}
