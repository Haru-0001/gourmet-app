import { FirstButton } from "@/components/elements/button/FirstButton";
import { SendMessage } from "@/components/elements/message/SendMessage";
import { PromptMessage } from "@/components/elements/message/PromptMessage";
import { RangeSlider } from "@/components/modules/RangeSlider";
import { cookies } from "next/headers";
import { sepHour } from "@/features/time/sepHour";
import { sepSkyTheme } from "@/features/theme/sepSkyTheme";

export default function Home() {
  //Cookieから時間を取得
  const hour = Number(cookies().get("currentTime")?.value || "12");  //現在の時刻(h) 初期値は12時
  const skyState = sepHour(hour); //時間帯を取得
  const skyTheme = sepSkyTheme(skyState); //時間帯のテーマを取得

  return (
    <div className={`h-screen flex flex-col ${skyTheme}`}>
      <div className="my-8 md:my-12"><SendMessage skyState={skyState} /></div>
      <div className="mb-6 md:mb-12"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="flex justify-center mt-16"><RangeSlider /></div>
    </div>
  )
}
