import { useResSearch } from "@/features/restaurant/search/useResSearch";
import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime"
import { FC } from "react";

export const SearchButton:FC<{
    time:ThemeTimeType,
    range:number
}> = ({
    time,
    range
}) => {
    const hoverTheme = themeColor[time].primaryHover
    const onResSearch = useResSearch(range);
    return (
        <button onClick={onResSearch} className={` m-2 h-10 w-64 border-4 rounded-lg ${hoverTheme}`}>
            検索
        </button>
    )
}