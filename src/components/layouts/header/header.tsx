import React from "react";
import { cookies } from "next/headers";
import { sepHour } from "@/features/time/sepHour";
import { sepSkyTheme } from "@/features/theme/sepSkyTheme";
import { RangeSlider } from "@/components/modules/RangeSlider";
import { IsSliderButton } from "@/components/elements/button/IsSliderButton";


const Header = () => {
    const hour = Number(cookies().get("currentTime")?.value || "12");  //現在の時刻(h) 初期値は12時
    const skyState = sepHour(hour); //時間帯を取得
    const skyTheme = sepSkyTheme(skyState); //時間帯のテーマを取得
    return (
        <header>
            <nav  className={` ${skyTheme} text-white flex flex-col`}>
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