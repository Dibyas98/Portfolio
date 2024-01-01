import React from "react";

import Details from "./Details/Details";
import Logos from "./Details/Logos";
import Avtar from "./Avtar/Avtar";

export default function Left() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-white">
      <Avtar></Avtar>
      <div className="border h-0 w-3/4 border-[#383838]"></div>
      <Details></Details>
      <div className="border h-0 w-3/4 border-[#383838]"></div>
      <Logos></Logos>
    </div>
  );
}
