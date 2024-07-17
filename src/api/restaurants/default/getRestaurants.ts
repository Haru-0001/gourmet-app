'use server'

import { Restaurant } from "@/types/Restaurant";
import { GetLocalRestaurant } from "@/types/GetLocalRestaurant";

// レストランのデータを取得するAPI
export async function getRestaurants(params: GetLocalRestaurant): Promise<Restaurant> {
    try {
        const apiUrl = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?'
        const apiKey = process.env.HOT_PEPPER_API_KEY
        const { start, range, latitude, longitude } = params;

        //const response = await fetch("http://localhost:3030/test-data");    //api_test
        //console.log(`URL: ${JSON.stringify(params)}`)

        //.envに設定したAPIのURLとAPIのキーを取得しfetchでホットペッパーグルメサーチAPIと通信
        console.log(`URL: ${apiUrl}${apiKey}&format=json&start=${start}&lat=${latitude}&lng=${longitude}&range=${range}`)
        const response = await fetch(`${apiUrl}${apiKey}&format=json&start=${start}&lat=${latitude}&lng=${longitude}&range=${range}`);

        //接続が成功したかどうかを確認し、成功していない場合はエラーを投げる
        if (!response.ok) {
            throw new Error(`HTTPエラー status: ${response.status}`);
        }

        //json形式で取得したデータをrestaurantsに格納
        const restaurants: Restaurant = await response.json();
        console.log("Restaurantのデータを取得しました", response["status"], restaurants,);

        return restaurants;
    } catch (error) {
        //エラー処理
        console.error(error);
        throw new Error('フェッチに失敗しました');
    }
}