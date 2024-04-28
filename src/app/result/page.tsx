'use client'
import getLocation from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/lite/getLiteData";
import Card from "@/components/elements/card/Card";

export default async function result() {
    const coordinate = await getLocation();
    const restaurants = await getRestaurants({ ...coordinate.params, start: 1, range: 3});
    return (
        <>
            //<p>{JSON.stringify(restaurants)}</p>
            <Card />
        </>
    );
}
