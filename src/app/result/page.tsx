'use client'

import Card from "@/components/elements/card/Card";
import fetchRestaurant from "@/features/result/list/fetchRestaurant";



export default function result() {
    const result = fetchRestaurant();

    return (
        <>
            <Card
                photo={"https://imgfp.hotp.jp/IMGH/92/24/P044289224/P044289224_238.jpg"}
                title={"うまいカレー"}
                pr={"説明説明"}
            />
            <p>{JSON.stringify(result.userLocation)}</p>
            <p>{JSON.stringify(result.allRestaurant)}</p>
        </>
    );
}
