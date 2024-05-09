import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//レンダリング前に時刻を取得してクッキーに保存
export function middleware(req : NextRequest) {
    const currentTime = new Date().getHours();
    const response = NextResponse.next();
    response.cookies.set("currentTime", currentTime.toString());
    console.log("middleware", response.cookies.getAll());
    console.log(req.nextUrl.href);
    return response;
}
export const config = {
    matcher: ["/" , "/result"],
};