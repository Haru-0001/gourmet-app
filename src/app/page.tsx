import { FirstButton } from "@/components/elements/FirstButton";
import { SendMessage } from "@/components/elements/messages/SendMessage";
import { PromptMessage } from "@/components/elements/messages/PromptMessage";
import { RangeSlider } from "@/components/elements/RangeSlider";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-indigo-950">
      <div className="my-8 md:my-12"><SendMessage /></div>
      <div className="mb-6 md:mb-12"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="mt-16"><RangeSlider /></div>
    </div>
  );
}
