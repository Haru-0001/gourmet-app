'use server'

import { LiteRestaurant } from "@/types/LiteRestaurant";
import { GetLocalRestaurant } from "@/types/GetLocalRestaurant";

// liteなレストランのデータを取得するAPI
export async function getLiteRestaurants(params: GetLocalRestaurant): Promise<LiteRestaurant> {
    try {
    const apiUrl = process.env.HOT_PEPPER_API_URL
    const apiKey = process.env.HOT_PEPPER_API_KEY
    const { start, range, latitude, longitude } = params;

    //const response = await fetch("http://localhost:3030/results");    //api_test

    console.log(`${params}のデータを取得します`)
    const response = await fetch(`${apiUrl}${apiKey}&type=lite&format=json&start=${start}&lat=${latitude}&lng=${longitude}&range=${range}`);

    if (!response.ok) {
        throw new Error(`HTTPエラー status: ${response.status}`);
    }
    const restaurants :LiteRestaurant = await response.json();
    console.log("LiteRestaurantのデータを取得しました",response["status"],restaurants,);

    return restaurants;
    }catch(error) {
        //エラー処理
        console.error(error);
        throw new Error('フェッチに失敗しました');
    }
}