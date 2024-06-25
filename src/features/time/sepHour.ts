
import { serverTime } from "@/api/time/serverTime";
import { MessageTimeType, ThemeTimeType } from "@/types/ThemeTime";

const hour = serverTime();

//時間を受け取り、その時間帯を返す関数
export function themeTime(): ThemeTimeType {
  if (hour >= 18 || hour <= 4) {
    return "night";
  } else if (hour <= 6 || hour >= 16) {
    return "twilight";
  } else {
    return "sky";
  }
}

//時間を受け取り、その時間帯に合ったメッセージを返す関数
export function messageTime(): MessageTimeType {
  if (hour >= 18 || hour <= 4) {
    return "night";
  } else if (hour >= 16) {
    return "evening";
  } else if (hour <= 10) {
    return "morning";
  } else {
    return "noon";
  }
}
