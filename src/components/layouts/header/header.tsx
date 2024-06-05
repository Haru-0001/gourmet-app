import React from "react";
import { RangeSlider } from "@/components/modules/RangeSlider";
import { IsSliderButton } from "@/components/elements/button/IsSliderButton";
import { themeColor } from "@/store/themeData";

const Header = () => {

    const skyState = "sky"
    const useTheme = themeColor[skyState].primaryBg;

    return (
        <header>
            <nav  className={` ${"bg-"+useTheme} text-white flex flex-col`}>
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