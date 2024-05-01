'use client'

import { RestaurantCard } from "@/types/RestaurantCard";
import  Card from "@/components/elements/card/Card";
import {fetchLiteRestaurant} from "@/features/restaurant/fetch/fetchLiteRestaurant";
import {cardMapper} from "@/features/restaurant/card/cardMapper";
import { useEffect, useState } from "react";


export default function result() {
    const [cardMap, setCardMap] = useState<RestaurantCard[]>([]);
    async function getRestaurants() {
        const res = await fetchLiteRestaurant();
        setCardMap(cardMapper(res));
    }
    useEffect(() => {
        getRestaurants();
    }, []);
    return (
        <div>
            {cardMap.map(card => (
                <Card key={card.key} photo={card.photo} title={card.title} pr={card.pr} />
            ))}
        </div>
    );
}
