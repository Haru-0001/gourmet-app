'use server'

import { LiteRestaurant } from "@/types/LiteRestaurant";
import { GetLiteRestaurant } from "@/types/GetLiteRestaurant";


export async function getRestaurants(params: GetLiteRestaurant): Promise<LiteRestaurant> {
    try {
    const apiUrl = process.env.HOT_PEPPER_API_URL
    const apiKey = process.env.HOT_PEPPER_API_KEY
    const { start, range, latitude, longitude } = params;
    const response = await fetch(`${apiUrl}${apiKey}&type=lite&format=json&${start}&lat=${latitude}&lng=${longitude}&range=${range}`);

    if (!response.ok) {
        throw new Error(`エラー： ${response.status}`);
    }
    console.log(response);
    const restaurants :LiteRestaurant = await response.json();
    return restaurants;
    }catch(error) {
        console.error(error);
        throw new Error('フェッチに失敗しました');
    }
}