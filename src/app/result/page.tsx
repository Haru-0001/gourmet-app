'use client'
import { Card }from "@/components/elements/Card";
import { GetLocalRestaurant } from "@/types/GetLocalRestaurant";
import {useEffect, useState } from "react";
import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/default/getRestaurants";
import { Restaurant } from "@/types/Restaurant";
import { RestaurantCard } from "@/types/RestaurantCard";
import { cardMapper } from "@/features/restaurant/card/cardMapper";


// ユーザーの位置情報を取得し、その位置情報を元にレストランのデータを取得する
export default function result() {
    const [restaurants, setRestaurant] = useState<Restaurant>();
    const [cards, setCards] = useState<RestaurantCard[]>([]);
    async function getUserRestaurants() {
        const location = await getLocation()
        const params: GetLocalRestaurant = {
            start: 1,
            range: 5,
            latitude: location.latitude,
            longitude: location.longitude
        }
        const response = await getRestaurants(params)
        setRestaurant(response)
        const restaurantCards = cardMapper(response)
        setCards(restaurantCards)
    }

    //useEffectを使用してgetUserRestaurantsを実行
    useEffect(() => {
        getUserRestaurants()
    }, [])

    return (
        // レストランのデータをカードに表示
        <div>
            <div className="flex flex-col items-center">
            {cards?.map((restaurant: RestaurantCard) => (
                <Card key={restaurant.key} photo={restaurant.photo} title={restaurant.title} pr={restaurant.pr} access={restaurant.access}/>
            ))}
            </div>
        </div>
    )
}
