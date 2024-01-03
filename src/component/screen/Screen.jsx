import React, { useState } from 'react';
import Left from '../left/Left';
import './screen.css';
import Nav from '../right/nav/nav';
import About from '../right/AboutMe/About';
import Certificates from '../right/Certi/Certificates';
import MyProject from '../right/project/MyProject';
import More from '../right/More/More';
import Contact from '../right/contact/Contact';

export default function Screen() {
  const arr =['About','Certificates','Projects','More','Contact']
  const [count,setcount]=useState(0)
  const [live, setLive] = useState('About'); 
  const HandelNext =(arg)=>{
    setLive(arg)
  }

  const handleMenuClick = (section) => {
    setLive(section);
  };

  const renderSection = () => {
    switch (live) {
      case 'About':
        return <About next={HandelNext}/>;
      case 'Certificates':
        return <Certificates next={HandelNext}></Certificates>;
      case 'Projects':
        return <MyProject next={HandelNext}/>
      case 'More':
        return <More next={HandelNext}/>
      case 'Contact':
        return <Contact next={HandelNext}></Contact>
      default:
        return null;
    }
  };

  return (
    <div className='w-full bg-[#23D3Ff] flex justify-center pt-10 pb-14 gap-10 cont'>
      <div className='w-1/6 bg-[#21839C] py-16 rounded-2xl h-3/4 left'>
        <Left />
      </div>
      <div className='bg-[#235777] rounded-xl w-3/5 right'>
        <Nav onMenuClick={handleMenuClick} />
        {renderSection()}
      
      </div>
    </div>
  );
}
