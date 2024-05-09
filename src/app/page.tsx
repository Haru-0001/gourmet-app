import { FirstButton } from "@/components/elements/FirstButton";
import { SendMessage } from "@/components/elements/messages/SendMessage";
import { PromptMessage } from "@/components/elements/messages/PromptMessage";
import { RangeSlider } from "@/components/elements/RangeSlider";
import { cookies } from "next/headers";
import { sepHour } from "@/features/time/sepHour";

export default function Home() {
  const hour = Number(cookies().get("currentTime")?.value || "12");
  const skyTheme = sepHour(hour);

  return (
    <div className={`h-screen flex flex-col ${skyTheme}`}>
      <div className="my-8 md:my-12"><SendMessage /></div>
      <div className="mb-6 md:mb-12"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="mt-16"><RangeSlider /></div>
    </div>
  )
}
