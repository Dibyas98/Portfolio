import React from "react";
import './more.css'

export default function MoreCard(props) {
  return (
    <div className=" bg-[#21475F] pb-5  rounded-xl morecard" >
      <img src={props.pic} alt=""  className="rounded-xl"/>
      <div className="flex flex-col px-8 pt-5 gap-2">
        <h4 className="font-medium text-[#9AAFB6]">
          props.head
        </h4>
        <h2 className="font-medium text-2xl text-[#fff]">{props.name}</h2>
        <p className="text-[#AEBBC0]">
          {props.des}
        </p>
        <button className="bg-[#AEBBC0] text-[#FFDB70] rounded">Website</button>
        <button className="bg-[#AEBBC0] text-[#FFDB70] rounded">Instagram</button>
        <button className="bg-[#AEBBC0] text-[#FFDB70] rounded">Youtube</button>
      </div>
    </div>
  );
}
