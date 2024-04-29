import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/lite/getLiteRestaurant";
import { LiteRestaurant } from "@/types/LiteRestaurant";
import { Coordinate } from "@/types/Coordinate";
import { useState, useEffect } from "react";

export default function fetchRestaurant() {
    const [userLocation, setUserLocation] = useState<Coordinate | null>(null)
    const [allRestaurant, setAllRestaurants] = useState<LiteRestaurant[]>([])

    const fetchRestaurants = async () => {
        const userLocation = await getLocation();
        setUserLocation(userLocation.params);
        const params = {
            start: 1,
            range: 5,
            latitude: userLocation.params.latitude,
            longitude: userLocation.params.longitude,
        };
        const restaurants = await getRestaurants(params);
        setAllRestaurants([restaurants]);
    }
    useEffect(() => {
        fetchRestaurants();
    }, []);
    return { allRestaurant, userLocation }
}