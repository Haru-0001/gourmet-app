"use client"
import { useState } from 'react';

const IsSliderButton = () =>{
    const [isChecked, setIsChecked] = useState(true);

    const sliderCheck = () =>{
        setIsChecked(!isChecked);
    }

    return(
        <div className="relative">
            <button onClick={()=> sliderCheck()} className="absolute -top-1 flex justify-center  items-center size-6 bg-slate-100 rounded-full transition-transform duration-200 hover:scale-110">
                {isChecked && <div className="size-3  rounded-full bg-indigo-950"></div>}
            </button>
        </div>
    )
}
export {IsSliderButton}