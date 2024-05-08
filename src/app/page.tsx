import { FirstButton } from "@/components/elements/FirstButton";
import { SendMessage } from "@/components/elements/messages/SendMessage";
import { PromptMessage } from "@/components/elements/messages/PromptMessage";
import { Slider } from "@/components/ui/slider"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className=" my-12"><SendMessage /></div>
      <div className=" my-8"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="flex justify-center my-16"><Slider defaultValue={[2]} max={4} step={1} /></div>
    </div>
  );
}
