import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//レンダリング前に時刻を取得してCookieに保存
export function middleware(req : NextRequest) {
    //JSTでhourを取得
    const currentTime = new Date().toLocaleString('en-GB', { timeZone: 'JST' , hour: "numeric"});
    const response = NextResponse.next();
    response.cookies.set("currentTime", currentTime.toString());
    response.cookies.set("range", "2");
    console.log("middlewareURL:", req.nextUrl.href);
    console.log("cookieData", response.cookies.getAll());
    return response;
}

// ルートと/resultのみmiddlewareが実行されるように設定
export const config = {
    matcher: ["/" , "/result"],
};