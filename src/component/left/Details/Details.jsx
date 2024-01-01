import React from "react";
import { Hourglass, MapPin, SquareUser } from 'lucide-react';
import './detail.css'

export default function Details() {
    return (
        <div className="detail w-full flex flex-col items-center gap-5">
            <div className="flex  w-3/5 items-center gap-4">
                <div className="bg-[#203036] w-10 h-10 py-2 rounded-xl">
                    <Hourglass className="m-auto text-amber-400"></Hourglass>
                </div>
                <div>
                    <p className="text-xs font-bold">AGE</p>
                    <p>22 Years old</p>
                </div>
            </div>
            <div className="flex  w-3/5 items-center gap-4">
                <div className="bg-[#203036] w-10 h-10 py-2 rounded-xl">
                    <MapPin className="m-auto text-amber-400" />
                </div>
                <div>
                    <p className="text-xs font-bold">LOCATION</p>
                    <p>Bangalore,India</p>
                </div>
            </div>
            <div className="flex items-center gap-4 w-3/5">
                <div className="bg-[#203036] w-10 h-10 py-2 rounded-xl">
                    <SquareUser className="m-auto text-amber-400" />
                </div>
                <div>
                    <p className="text-xs font-bold">PERSONALITY TYPE</p>
                    <p>INTJ-T</p>
                </div>
            </div>
        </div>
    );
}
