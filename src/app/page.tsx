'use client'

import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/lite/getLiteRestaurant";
import FirstButton from "@/components/elements/buttons/FirstButton";
import { useEffect, useState } from "react";
import { Coordinate } from "@/types/coordinate";
import { LiteRestaurant } from "@/api/restaurants/types/Restaurant";

export default function Home() {
  const [userLocation, setUserLocation] = useState<Coordinate | null>(null)
  const [allRestaurant,setAllRestaurants] = useState<LiteRestaurant[]>([]) // Update the type to an array of LiteRestaurant objects

  const fetchRestaurants = async () => {
    const userLocation = await getLocation();
    setUserLocation(userLocation.params);
    const params = {
      start: 1,
      range: 5,
      latitude: userLocation.params.latitude,
      longitude: userLocation.params.longitude,
    };
    const restaurantList = await getRestaurants(params);
    setAllRestaurants([restaurantList]);
  }
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <div>
      <button onClick={fetchRestaurants}>ボタン</button>
      <p>{JSON.stringify(userLocation)}</p>
      <p>{JSON.stringify(allRestaurant)}</p>
    </div>
  );
}
