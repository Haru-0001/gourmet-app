import { Restaurant } from "./lite";

export const getRestaurants = async () :Promise<Restaurant[]> => {
    const res = await fetch("http://localhost:3030/results" , {
        cache:"no-store", //SSR(要検討)
    });
    const restaurants = res.json();
    return restaurants;
}