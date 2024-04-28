//位置情報を取得

import { Coordinate } from "@/types/coordinate"

export default async function getLocation(): Promise<{ params : Coordinate }> {
    const options :PositionOptions= {
        maximumAge: 0,
        timeout: 10000,
        enableHighAccuracy: true,
    }
    return new Promise((resolve, reject) => {
    const success: PositionCallback = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        resolve({ params: { latitude, longitude } })
    }

    const error: PositionErrorCallback = (error): void => {
        reject(new Error(error.message))
        }
    navigator.geolocation.getCurrentPosition(success, error, options)
    })
}