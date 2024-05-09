import { FirstButton } from "@/components/elements/FirstButton";
import { SendMessage } from "@/components/elements/messages/SendMessage";
import { PromptMessage } from "@/components/elements/messages/PromptMessage";
import { RangeSlider } from "@/components/dataInput/RangeSlider";
import { cookies } from "next/headers";
import { sepHour } from "@/features/time/sepHour";
import { sepSkyTheme } from "@/components/layouts/theme/sepSkyTheme";

export default function Home() {
  const hour = Number(cookies().get("currentTime")?.value || "12");
  const skyState = sepHour(hour);
  const skyTheme = sepSkyTheme(skyState);

  return (
    <div className={`h-screen flex flex-col ${skyTheme}`}>
      <div className="my-8 md:my-12"><SendMessage skyState={skyState} /></div>
      <div className="mb-6 md:mb-12"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="flex justify-center mt-16"><RangeSlider /></div>
    </div>
  )
}
