import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//レンダリング前に時刻を取得してCookieに保存
export function middleware(req : NextRequest) {
    //JSTでhourを取得
    const JSTime = new Date().toLocaleString('en-GB', { timeZone: 'JST' , hour: "numeric"});
    const response = NextResponse.next();
    response.cookies.set("JSTime", JSTime);
    console.log("middlewareURL:", req.nextUrl.href);
    console.log("cookieData", response.cookies.getAll());
    return response;
}
export const config = {
    matcher: ["/"],
};