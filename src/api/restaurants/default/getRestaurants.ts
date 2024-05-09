'use server'

import { Restaurant } from "@/types/Restaurant";
import { GetLocalRestaurant } from "@/types/GetLocalRestaurant";


export async function getRestaurants(params: GetLocalRestaurant): Promise<Restaurant> {
    try {
        const apiUrl = process.env.HOT_PEPPER_API_URL
        const apiKey = process.env.HOT_PEPPER_API_KEY
        const { start, range, latitude, longitude } = params;

        console.log(`${params}のデータを取得します`)
        const response = await fetch(`${apiUrl}${apiKey}&format=json&start=${start}&lat=${latitude}&lng=${longitude}&range=${range}`);

        if (!response.ok) {
            throw new Error(`HTTPエラー status: ${response.status}`);
        }
        const restaurants: Restaurant = await response.json();
        console.log("Restaurantのデータを取得しました", response["status"], restaurants,);
        return restaurants;
    } catch (error) {
        console.error(error);
        throw new Error('フェッチに失敗しました');
    }
}