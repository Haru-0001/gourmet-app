"use client"
import { Slider } from "@/components/ui/slider"
import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime";
import jsCookie from "js-cookie"

//Cookieに値を保存
const onValueChange = (value: number[]) => {
    jsCookie.set("range", value[0].toString());
    console.log("range", jsCookie.get("range"));
}

const RangeSlider = (value:{time:string}) => {
    const time = value.time as ThemeTimeType;
    const textTheme = themeColor[time].primaryText
    const thumbTheme = themeColor[time].primaryAction
    const ringTheme = themeColor[time].ring
    return (
        <div className="relative mb-6 w-9/12">
            <Slider defaultValue={[2]} min={1} max={5} step={1} onValueChange={onValueChange} theme={{ thumbTheme, ringTheme }} />
            <span className={`text-sm ${ textTheme } absolute start-[-12px] -bottom-6`}>&nbsp;300m</span>
            <span className={`text-sm ${ textTheme } absolute start-1/4 -translate-x-1/2 -bottom-6`}>&emsp;500m</span>
            <span className={`text-sm ${ textTheme } absolute start-1/2 -translate-x-1/2 -bottom-6`}>1000m</span>
            <span className={`text-sm ${ textTheme } absolute start-3/4 -translate-x-1/2 -bottom-6`}>2000m</span>
            <span className={`text-sm ${ textTheme } absolute end-[-12px] -bottom-6`}>3000m</span>
        </div>
    );
}
export { RangeSlider }