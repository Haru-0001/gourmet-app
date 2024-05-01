import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/lite/getLiteRestaurant";
import { Coordinate } from "@/types/Coordinate";
import { GetLiteRestaurant } from "@/types/GetLiteRestaurant";
import { LiteRestaurant } from "@/types/LiteRestaurant";

export async function fetchLiteRestaurant() {
    const userLocation : {params : Coordinate} = await getLocation();
    const params :GetLiteRestaurant = {
        start: 1,
        range: 5,
        latitude: userLocation.params.latitude,
        longitude: userLocation.params.longitude
    }
    const restaurants : LiteRestaurant = await getRestaurants(params);
    return restaurants;
}