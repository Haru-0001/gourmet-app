import { messageTime } from "@/features/time/sepHour";
import { themeColor, themeMessage } from "@/store/themes";
import {ThemeTimeType } from "@/types/ThemeTime";

//時間帯によってメッセージを変えるコンポーネント
const SendMessage = (props:{time:ThemeTimeType}) => {
    const timeMessage = messageTime();
    const message = themeMessage[timeMessage].firstMessage;
    const time = props.time;
    const textTheme = themeColor[time].primaryText;

    return (
        <p className={`text-4xl text-center md:text-6xl ${textTheme}`}
            dangerouslySetInnerHTML={{ __html: message }}>
        </p>
    )
}

export { SendMessage };

