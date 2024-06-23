import { GitButton } from "@/components/elements/button/GitButton";
import { themeTime } from "@/features/time/sepHour";
import { themeColor } from "@/store/themes";
import { ThemeTimeType } from "@/types/ThemeTime";

const Footer = () => {
    const time = themeTime() as ThemeTimeType;
    const theme = themeColor[time].primaryBg
    return (
        <footer>
            <nav  className={`${theme} text-white flex flex-col`}>
                <div className="flex items-center">
                    <svg className="p-1" width="36" height="36" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 100 500 Q 100 375 200 350 Q 200 200 350 200 Q 500 50 650 200 Q 800 200 800 350 Q 900 375 900 500 L 950 500 Q 950 850 650 900 L 650 950 350 950 350 900 Q 50 850 50 500 Z" stroke="#fff" strokeWidth="128" fill="none" />
                    </svg>
                    <p className="text-2xl mr-auto">今日のごはんナビ</p>
                    <GitButton />
                </div>
                <p className="flex justify-center mt-6">Powered by &thinsp;<a className="underline" href="http://webservice.recruit.co.jp/">ホットペッパーグルメ Webサービス</a></p>
            </nav>
        </footer>
    );
}

export { Footer }