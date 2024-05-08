'use client'
import { Card }from "@/components/elements/Card";
import { GetLocalRestaurant } from "@/types/GetLocalRestaurant";
import {useEffect, useState } from "react";
import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/default/getRestaurants";
import { Restaurant } from "@/types/Restaurant";
import { RestaurantCard } from "@/types/RestaurantCard";
import { cardMapper } from "@/features/restaurant/card/cardMapper";


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

    useEffect(() => {
        getUserRestaurants()
    }, [])

    return (
        <div className="flex flex-col items-center">
            {cards?.map((restaurant: RestaurantCard) => (
                <Card key={restaurant.key} photo={restaurant.photo} title={restaurant.title} pr={restaurant.pr} />
            ))}
        </div>
    )
}
