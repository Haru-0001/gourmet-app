import { Coordinate } from "@/types/Coordinate"

//GeoLocationAPIを用いて位置情報を取得
export function getLocation(): Promise<Coordinate> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            //位置情報取得成功時
            (success) => {
                resolve({
                    latitude: success.coords.latitude,
                    longitude: success.coords.longitude,
                });
            },
            //位置情報取得失敗時
            (error) => {
                reject(error)
            },
            //options
            {
                maximumAge: 0,
                timeout: 10000,
                enableHighAccuracy: false,
            }
        )
    })
}