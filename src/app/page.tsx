'use client'

import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/lite/getLiteRestaurant";
import FirstButton from "@/components/elements/buttons/FirstButton";
import { useEffect, useState } from "react";
import { Coordinate } from "@/types/coordinate";
import { LiteRestaurant } from "@/api/restaurants/types/Restaurant";

export default function Home() {
  const [userLocation, setUserLocation] = useState<Coordinate | null>(null)
  const [allRestaurant,setAllRestaurants] = useState<LiteRestaurant[]>([])

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
   return (
    <div>
      <div onClick={fetchRestaurants}>
        <FirstButton />
      </div>
      <p>{JSON.stringify(userLocation)}</p>
      <p>{JSON.stringify(allRestaurant)}</p>
    </div>
  );
}
