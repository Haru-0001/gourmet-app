import { messageTime, themeTime } from "@/features/time/sepHour";
import { themeColor, themeMessage } from "@/store/themes";
import { MessageTimeType, ThemeTimeType} from "@/types/ThemeTime";

//時間帯によってメッセージを変えるコンポーネント
const SendMessage = () => {
    const timeMessage = messageTime() as MessageTimeType;
    const timeTheme = themeTime() as ThemeTimeType;

    const message = themeMessage[timeMessage].firstMessage;
    const theme = themeColor[timeTheme].primaryText;

    return (
        <p className={`text-4xl text-center md:text-6xl ${theme}`}
            dangerouslySetInnerHTML={{ __html: message }}>
        </p>
    )
}

export { SendMessage };

