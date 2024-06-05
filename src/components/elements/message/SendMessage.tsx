import { messageTime } from "@/features/time/sepHour";
import { themeMessage } from "@/store/themeData";
import { MessageTimeType } from "@/types/ThemeTime";

//時間帯によってメッセージを変えるコンポーネント
const SendMessage = () => {
    const time = messageTime() as MessageTimeType;
    const message = themeMessage[time].firstMessage;

    return (
        <p className="text-4xl text-center md:text-6xl text-neutral-50"
            dangerouslySetInnerHTML={{ __html: message }}>
        </p>
    )
}

export { SendMessage };

