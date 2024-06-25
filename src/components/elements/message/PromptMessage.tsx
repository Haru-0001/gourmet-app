import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime";

const PromptMessage = (props:{time:ThemeTimeType}) => {
    const time = props.time;
    const textTheme = themeColor[time].primaryText;
return(
    <p className={`text-2xl md:text-4xl text-center ${textTheme}`}>
        タップで検索！
    </p>
)
}
export { PromptMessage };