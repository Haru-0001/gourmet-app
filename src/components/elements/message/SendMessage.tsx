import { messageTime } from "@/features/time/sepHour";
import { themeColor, themeMessage } from "@/store/themes";
import { MessageTimeType, ThemeTimeType } from "@/types/ThemeTime";

//時間帯によってメッセージを変えるコンポーネント
const SendMessage = (value:{time:string}) => {
    const timeMessage = messageTime() as MessageTimeType;
    const message = themeMessage[timeMessage].firstMessage;
    const time = value.time as ThemeTimeType;
    const textTheme = themeColor[time].primaryText;

    return (
        <p className={`text-4xl text-center md:text-6xl ${textTheme}`}
            dangerouslySetInnerHTML={{ __html: message }}>
        </p>
    )
}

export { SendMessage };

