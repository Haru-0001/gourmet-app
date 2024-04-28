
import Card from "@/components/elements/card/Card;
import { getRestaurants } from "@/api/restaurants/getRestaurantApi";

export default async function result() {
    // const restaurants = await getRestaurants();
    // console.log(restaurants);
    return (
        <>
            <Card />
        </>
    );
}
