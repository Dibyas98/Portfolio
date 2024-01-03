import React from 'react'
import Heading from '../Heaading/Heading'
import MoreCard from './MoreCard'
import pigletz from "./Assects/pigletz.jpg";
import shabeats from './Assects/sha-beats.jpg';
import shapixels from './Assects/sha-pixels.png'
import ButtomNext from '../Heaading/ButtomNext';


export default function More() {
    return (
        <div className='pb-10'>
            <Heading head={'Side Projects'}></Heading>
           <div className='flex justify-center '>
           <div className='flex flex-wrap justify-between pt-10 gap-6 ' style={{width:'90%'}}>
                <MoreCard pic={pigletz} name={`Pigletz`} head={`Marketing & BizDev Content Creator`} des={`I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.`}></MoreCard>
                <MoreCard pic={shabeats} name={`Pigletz`} head={`Marketing & BizDev Content Creator`} des={`I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.`}></MoreCard>

                <MoreCard pic={shapixels} name={`Pigletz`} head={`Marketing & BizDev Content Creator`} des={`I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.`}></MoreCard>            </div>
           </div>
           <ButtomNext></ButtomNext>
        </div>
    )
}
