import { FirstButton } from "@/components/elements/button/FirstButton";
import { SendMessage } from "@/components/elements/message/SendMessage";
import { PromptMessage } from "@/components/elements/message/PromptMessage";
import { RangeSlider } from "@/components/modules/RangeSlider";
import { themeTime } from "@/features/time/sepHour";
import { themeColor } from "@/store/themes";


export default function Home() {
  const time = themeTime();
  const theme = themeColor[time].primaryBg;

  return (
    <div className={`h-screen flex flex-col ${theme}`}>
      <div className="my-8 md:my-12"><SendMessage time={time}/></div>
      <div className="mb-6 md:mb-12"><PromptMessage time={time}/></div>
      <div className="flex justify-center"><FirstButton time={time} pathName='/result'/></div>
      <div className="flex justify-center mt-16"><RangeSlider time={time}/></div>
    </div>
  )
}