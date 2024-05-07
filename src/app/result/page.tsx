'use client'
import  Card from "@/components/elements/card/Card";
import { GetLiteRestaurant } from "@/types/GetLiteRestaurant";
import {useEffect, useState } from "react";
import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/lite/getLiteRestaurant";
import { LiteRestaurant } from "@/types/LiteRestaurant";
import { RestaurantCard } from "@/types/RestaurantCard";
import { cardMapper } from "@/features/restaurant/card/cardMapper";


export default function result() {
    const [restaurants, setRestaurant] = useState<LiteRestaurant>();
    const [cards, setCards] = useState<RestaurantCard[]>([]);
    async function getUserRestaurants() {
        const location = await getLocation()
        const params: GetLiteRestaurant = {
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

    useEffect(() => {
        getUserRestaurants()
    }, [])

    return (
        <div>
            {cards?.map((restaurant: RestaurantCard) => (
                <Card key={restaurant.key} photo={restaurant.photo} title={restaurant.title} pr={restaurant.pr} />
            ))}
        </div>
    )
}
