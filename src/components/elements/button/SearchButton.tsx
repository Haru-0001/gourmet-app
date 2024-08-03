import { rangeAtom } from "@/store/searchAtom";
import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime"
import { useSetAtom } from "jotai";
import { FC } from "react";

export const SearchButton:FC<{
    time:ThemeTimeType,
    range:number
}> = ({
    time,
    range
}) => {
    const hoverTheme = themeColor[time].primaryHover
    const setRangeAtom = useSetAtom(rangeAtom);
    const onSetRange = () => {
        setRangeAtom(range);
        console.log(range)
    }
    return (
        <button onClick={onSetRange} className={` m-2 h-10 w-64 border-4 rounded-lg ${hoverTheme}`}>
            検索
        </button>
    )
}