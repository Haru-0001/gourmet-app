import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime";

const PromptMessage = (value:{time:string}) => {
    const time = value.time as ThemeTimeType;
    const textTheme = themeColor[time].primaryText;
return(
    <p className={`text-2xl md:text-4xl text-center ${textTheme}`}>
        タップで検索！
    </p>
)
}
export { PromptMessage };