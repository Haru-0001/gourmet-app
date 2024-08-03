"use client"
import { Slider } from "@/components/ui/slider"
import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime";
import { useAtom } from 'jotai';
import { isSliderAtom, rangeAtom } from '@/store/searchAtom';
import { FC, useEffect } from "react";

const RangeSlider:FC<{
    time:ThemeTimeType,
    changeRange: (value: number) => void
}> = ({
    time,
    changeRange
}) => {
    const textTheme = themeColor[time].primaryText;
    const thumbTheme = themeColor[time].primaryAction;
    const ringTheme = themeColor[time].ring;

    const [isChecked ,setIsChecked] = useAtom(isSliderAtom);
    const opacity = isChecked ? "opacity-100" : "opacity-50";

    const onValueChange = (value:number[]) => {
        changeRange(value[0]);
    };

    useEffect(() => {
        setIsChecked(true)
    },[])

    return (
        <div className={`relative my-6 w-9/12 ${opacity}`}>
            <Slider defaultValue={[2]} min={1} max={5} step={1} disabled={!isChecked} onValueChange={onValueChange} theme={{ thumbTheme, ringTheme }} />
            <span className={`text-sm ${ textTheme } absolute start-[-12px] -bottom-6`}>&nbsp;300m</span>
            <span className={`text-sm ${ textTheme } absolute start-1/4 -translate-x-1/2 -bottom-6`}>&emsp;500m</span>
            <span className={`text-sm ${ textTheme } absolute start-1/2 -translate-x-1/2 -bottom-6`}>1000m</span>
            <span className={`text-sm ${ textTheme } absolute start-3/4 -translate-x-1/2 -bottom-6`}>2000m</span>
            <span className={`text-sm ${ textTheme } absolute end-[-12px] -bottom-6`}>3000m</span>
        </div>
    );
}
export { RangeSlider }