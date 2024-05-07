import FirstButton from "@/components/elements/button/FirstButton";
import SendMessage from "@/components/elements/messages/SendMessage";
import PromptMessage from "@/components/elements/messages/PromptMessage";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">
      <div className=" my-12"><SendMessage /></div>
      <div className=" my-8"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
    </div>
  );
}
