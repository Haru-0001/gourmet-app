import React from "react";
import { RangeSlider } from "@/components/modules/RangeSlider";
import { IsSliderButton } from "@/components/elements/button/IsSliderButton";
import { themeTime } from "@/features/time/sepHour";
import { themeColor } from "@/store/themes";
import { SearchButton } from "@/components/elements/button/SearchButton";

const Header = () => {
    const time = themeTime();
    const theme = themeColor[time].primaryBg;
    return(
        <header>
            <nav  className={`${theme} text-white flex flex-col gap-y-4`}>
                <div className="flex">
                    <svg className="m-1" width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 100 500 Q 100 375 200 350 Q 200 200 350 200 Q 500 50 650 200 Q 800 200 800 350 Q 900 375 900 500 L 950 500 Q 950 850 650 900 L 650 950 350 950 350 900 Q 50 850 50 500 Z" stroke="#fff" strokeWidth="128" fill="none" />
                    </svg>
                    <h1 className="text-2xl">今日のごはんナビ</h1>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <IsSliderButton time={time}/>
                    <RangeSlider time={time}/>
                </div>
                <div className="flex justify-center">
                    <SearchButton time={time} />
                </div>
            </nav>
        </header>
    )
}

export { Header }