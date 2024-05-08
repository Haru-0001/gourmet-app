import FirstButton from "@/components/ui/FirstButton";
import SendMessage from "@/components/ui/messages/SendMessage";
import PromptMessage from "@/components/ui/messages/PromptMessage";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className=" my-12"><SendMessage /></div>
      <div className=" my-8"><PromptMessage /></div>
      <div className="flex justify-center"><FirstButton /></div>
      <div className="flex justify-center my-8"></div>
    </div>
  );
}
