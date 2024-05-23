import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//レンダリング前に時刻を取得してCookieに保存
export function middleware(req : NextRequest) {
    const currentTime = new Date().getHours();
    const response = NextResponse.next();
    response.cookies.set("currentTime", currentTime.toString());
    response.cookies.set("range", "2");
    console.log("cookieData", response.cookies.getAll());
    console.log("middlewareURL:", req.nextUrl.href);
    return response;
}

// ルートと/resultのみmiddlewareが実行されるように設定
export const config = {
    matcher: ["/" , "/result"],
};