import FirstButton from "@/components/elements/button/FirstButton";
import SendMessage from "@/components/elements/messages/SendMessage";
import PromptMessage from "@/components/elements/messages/PromptMessage";
import Link from "next/link";
import Range from "@/components/elements/dataInput/Range";

export default function Home() {
  return (
    <div >
        <div className=" my-12"><SendMessage /></div>
        <div className=" my-8"><PromptMessage /></div>
        <Link href="/result" className="flex justify-center" >
          <FirstButton />
        </Link>
        <div className="my-8">
          <Range />
        </div>
    </div>
  );
}
