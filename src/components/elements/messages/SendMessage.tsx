//時間帯によってメッセージを変えるコンポーネント

const defaultMessage = "ワンタップで<br />お店を探そう！";
const NightMessage = "今日も一日<br />お疲れ様です！";
const MorningMessage = "おはようございます！<br />素敵な一日に<br />なりますように";

interface SendMessageProps {
    skyState: string;
}

function getSkyMessage(skyState: string): string {
    if (skyState === "night") {
        return NightMessage;
    } else if (skyState === "morning") {
        return MorningMessage;
    } else {
        return defaultMessage;
    }
}

const SendMessage: React.FC<SendMessageProps> = ({ skyState }) => {
    const message = getSkyMessage(skyState);
    return (
        <p className="text-4xl text-center md:text-6xl text-neutral-50"
            dangerouslySetInnerHTML={{ __html: message }}>
        </p>
    )
}

export { SendMessage };

