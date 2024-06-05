import { FirstButton } from "@/components/elements/button/FirstButton";
import { SendMessage } from "@/components/elements/message/SendMessage";
import { PromptMessage } from "@/components/elements/message/PromptMessage";
import { RangeSlider } from "@/components/modules/RangeSlider";
import  { themeColor } from "@/store/themeData";
import { ThemeTimeType } from "@/types/ThemeTime";

export default function Home() {
  const time = "night" as ThemeTimeType //themeTime() as ThemeTimeType;
  const useTheme = themeColor[time].primaryBg //themeColor[time].primaryBg
  console.log("Theme:",useTheme)


  return (
    <div className={`h-screen flex flex-col ${"bg-"+useTheme}`}>
      <div className="my-8 md:my-12"><SendMessage/></div>
      <div className="mb-6 md:mb-12"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="flex justify-center mt-16"><RangeSlider /></div>
    </div>
  )
}