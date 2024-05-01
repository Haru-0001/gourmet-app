'use client'

import { CardType } from "@/types/CardType";
import  Card from "@/components/elements/card/Card";
import {fetchRestaurant} from "@/features/restaurant/fetch/fetchLiteRestaurant";
import {cardMapper} from "@/features/restaurant/card/cardMapper";
import { useEffect, useState } from "react";


export default function result() {
    const [cardMap, setCardMap] = useState<CardType[]>([]);
    async function getRestaurants() {
        const res = await fetchRestaurant();
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
