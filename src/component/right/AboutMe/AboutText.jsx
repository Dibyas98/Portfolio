import React, { useState } from 'react';

export default function AboutText() {
  const text = `<p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps, and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>`;

  const text1 = `<p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps, and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>
  <br/>
   <p>Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.</p>
    <br/>
  <p>In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs, and blockchain technology as I believe they have the potential to revolutionize business and online interactions.</p>
  <br/>
  <p>If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.</p>
  `;

  const [show, setshow] = useState(text);
  const [print,setprint] =useState('Show more')

  const HandelShow = () => {
    if (show === text) {
      setshow(text1);
      setprint('Hide less')
    } else {
      setshow(text);
      setprint('Show More')
    }
  };

  return (
    <div className='p-5 text-[#B2BCBF]'>
      <div className='bg-[#22687B] p-5 rounded-t-xl' dangerouslySetInnerHTML={{ __html: show }} />
      <p onClick={HandelShow} className='cursor-pointer py-3 text-center rounded-b-xl bg-[#22687B]'>
        {print}
      </p>
    </div>
  );
}
