import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime"

export const SearchButton = (props:{time:ThemeTimeType}) => {
    const time = props.time;
    const hoverTheme = themeColor[time].primaryHover
    return (
        <button className={` m-2 h-10 w-64 border-4 rounded-lg ${hoverTheme}`}>
            検索
        </button>
    )
}