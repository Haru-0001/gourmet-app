import React from "react";
import { RangeSlider } from "@/components/modules/RangeSlider";
import { IsSliderButton } from "@/components/elements/button/IsSliderButton";
import { themeTime } from "@/features/time/sepHour";
import { ThemeTimeType } from "@/types/ThemeTime";
import { themeColor } from "@/store/themes";


const Header = () => {

    const time = themeTime() as ThemeTimeType;
    const theme = themeColor[time].primaryBg

    return (
        <header>
            <nav  className={`${theme} text-white flex flex-col`}>
                <h1 className="text-xl m-2">今日のごはんナビ</h1>
                <div className="my-8 space-x-12 flex justify-center">
                    <IsSliderButton />
                    <RangeSlider />
                </div>
            </nav>
        </header>
    )
}

export { Header }