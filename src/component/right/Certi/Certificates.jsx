import React from 'react'
import Heading from '../Heaading/Heading'
import CertiCard from './CertiCard'
import CertiHead from './CertiHead'
import pic1 from './Assects/1.png'
import ButtomNext from '../Heaading/ButtomNext'


export default function Certificates({next}) {
  return (
    <div className='pb-10'>
      <Heading head={'My Certificates'} />
      <div className='pl-20 pt-10'>
        <CertiHead head={`Technical Competence`}></CertiHead>
        <div className='pt-10'>
          <CertiCard ins={`LinkedIn Learning`} top={`Node.Js Essentials`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`LinkedIn Learning`} top={`React.Js Essentials`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`LinkedIn Learning`} top={`JavaScript Essentials`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`Google Certified Digital Marketing Course`} top={`Fundamentals Of Digital Marketing`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`University of Helsinki`} top={`Elements Of AI`} pic={pic1}></CertiCard>
        </div>
      </div>


      <div className='pl-20 pt-10'>
        <CertiHead head={`Professional Skills`}></CertiHead>
        <div className='pt-10'>
          <CertiCard ins={`WEKA Media GmbH & Co. KG`} top={`Efficient Email Management`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`VIWIS GmbH`} top={`Time And Self Management`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`Microsoft`} top={`Excel 2013 Professional`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`Microsoft`} top={`Word 2013 Professional`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`IMAP GmbH`} top={`Intercultural Competence`} pic={pic1}></CertiCard>
        </div>
      </div>


      <div className='pl-20 pt-10'>
        <CertiHead head={`Language Proficiency`}></CertiHead>
        <div className='pt-10'>
          <CertiCard ins={`TELC European Language Certificates`} top={`German Language C1`} pic={pic1}></CertiCard>
        </div>
        <div className='pt-10'>
          <CertiCard ins={`LinguaTV GmbH`} top={`English Language B2`} pic={pic1}></CertiCard>
        </div>
        </div>
        <ButtomNext next={next} aft={`Projects`}/>
    </div>
  )
}
