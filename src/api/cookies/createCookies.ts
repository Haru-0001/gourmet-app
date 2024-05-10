'use server'

import { cookies } from "next/headers"

export async function createCookies(){
    cookies().set("range","2");
}