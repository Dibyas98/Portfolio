import React from 'react';
import Heading from '../Heaading/Heading';
import calendar from './Assects/calendar.png'
import github from './Assects/github.png'
import linkedin from './Assects/linkedin.png'
import instagram from './Assects/instagram.png'
import  twitter from './Assects/twitter.png'
import coffeesponsort from './Assects/coffee-sponsort.png'
import githubsponsors from './Assects/github-sponsors.png'
import paypalme from './Assects/paypalme.png'
import './contact.css'
export default function Contact() {
  return (
    <div className='pb-10'>
      <Heading head={'Contact'}></Heading>
      <div className='px-14 pt-8 '>
        <div className=' h-28 flex rounded-xl flex-col items-center justify-center gap-3' style={{ background: 'linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.205) 0%, hsla(240, 4%, 11%, 0.171) 100% ), hsla(240, 3%, 13%, 0.123)' }}>
          <h1 className='text-2xl font-bold text-[#fff] '>Email:</h1>
          <div className='bg-[#2E4D57] h-13 pt-1 px-2 rounded-md text-[#fff]'>oktayshakirov@gmail.com <button className='bg-[#383838] text-[#EB984B] h-8 w-14 rounded-xl'>copy</button></div>
        </div>
      </div>

      <div className='px-14 pt-8 '>
        <div className=' py-5 flex rounded-xl flex-col items-center justify-center gap-3' style={{ background: 'linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.205) 0%, hsla(240, 4%, 11%, 0.171) 100% ), hsla(240, 3%, 13%, 0.123)' }}>
          <h1 className='text-2xl font-bold text-[#fff] '>Schedule Video Call With Me:</h1>
          <img src={calendar} alt="" />
        </div>
      </div>

      <div className='px-14 pt-8 '>
        <div className=' py-5 flex rounded-xl flex-col items-center justify-center gap-3' style={{ background: 'linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.205) 0%, hsla(240, 4%, 11%, 0.171) 100% ), hsla(240, 3%, 13%, 0.123)' }}>
          <h1 className='text-2xl font-bold text-[#fff] '>Socials:</h1>
          <div className='flex gap-8'>
          <img src={github} alt="" className='con-social'/>
          <img src={linkedin} alt=""  className='con-social'/>
          <img src={instagram} alt="" className='con-social' />
          <img src={twitter} alt="" className='con-social' />
          </div>
        </div>
      </div>


      <div className='px-14 pt-8 '>
        <div className=' py-5 flex rounded-xl flex-col items-center justify-center gap-3' style={{ background: 'linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.205) 0%, hsla(240, 4%, 11%, 0.171) 100% ), hsla(240, 3%, 13%, 0.123)' }}>
          <h1 className='text-2xl font-bold text-[#fff] '>Support My Work:</h1>
          <p className='w-10/12 text-[#fff]'>Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.</p>
          <div className='flex flex-col gap-8'>
          <img src={coffeesponsort} alt=""  className='w-26 h-14 rounded-xl'/>
          <img src={githubsponsors} alt="" className='w-26 h-14 rounded-xl'/>
          <img src={paypalme} alt="" className='w-26 h-14 rounded-xl'/>
          
          </div>
        </div>
      </div>
    </div>
  );
}
