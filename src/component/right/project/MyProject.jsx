import React from 'react'
import Heading from '../Heaading/Heading'
import ProjectCard from './ProjectCard'
import mybestwishes from './Assects/mybestwishes.jpg'
import myworkphoto from './Assects/myworkphoto.png'
import ognodashboard from './Assects/ogno-dashboard.png'
import bayeraskmed from './Assects/bayer-askmed.png'
import enemzet from './Assects/enemzet.png'
import tinnitusblog from './Assects/tinnitus-blog.png'
import ButtomNext from '../Heaading/ButtomNext'
import './project.css'

export default function MyProject() {
  return (
    <div className='pb-10'>
      <Heading head={'My Projects'}></Heading>
      <div className='flex justify-center '>
      <div className=' proj-card p-1 pt-10 flex flex-wrap gap-5 justify-between   w-11/12'>
        <ProjectCard pic={mybestwishes} name={'MyBestWishes AI Generator'} des ={`Design + Frontend Figma | React.js | Chakra UI`} show={`Preview`}/>
        <ProjectCard pic={myworkphoto} name={'MyWorkPhoto AI Generator'} des ={`Design + Frontend Figma | React.js | Chakra UI`} show={`Preview`}/>
        <ProjectCard pic={ognodashboard} name={'Ogno Marketing Dashboard'} des ={`Fullstack Project React.js | Strapi.js | MySQL`} show={`GitHub`}/>
        <ProjectCard pic={bayeraskmed} name={'AskMed By Bayer'} des ={`Website + Chatbot Drupal | PHP | CSS`} show={`Preview`}/>
        <ProjectCard pic={enemzet} name={'EnEmZet Online Store'} des ={`Website + Admin Panel Next.js | TypeScript | MySQL`} show={`Preview`}/>
        <ProjectCard pic={tinnitusblog} name={'Beyond Tinnitus Blog'} des ={`Website Next.js | TypeScript | Material-UI`} show={`Preview`}/>
        <ProjectCard pic={mybestwishes} name={'MyBestWishes AI Generator'} des ={`Design + Frontend Figma | React.js | Chakra UI`} show={`Preview`}/>
        <ProjectCard pic={mybestwishes} name={'MyBestWishes AI Generator'} des ={`Design + Frontend Figma | React.js | Chakra UI`} show={`Preview`}/>
        <ProjectCard pic={mybestwishes} name={'MyBestWishes AI Generator'} des ={`Design + Frontend Figma | React.js | Chakra UI`} show={`Preview`}/>
      </div>
      </div>
      <ButtomNext></ButtomNext>
    </div>
  )
}
