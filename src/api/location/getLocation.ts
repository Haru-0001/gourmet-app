//位置情報を取得
import { Coordinate } from "@/types/Coordinate"

export function getLocation(): Promise<{ params : Coordinate }> {
    //位置情報のオプション
    const options :PositionOptions= {
        maximumAge: 0,
        timeout: 10000,
        enableHighAccuracy: true,
    }
    return new Promise((resolve, reject) => {
        //successの場合、緯度経度を返す
    const success: PositionCallback = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        resolve({ params: { latitude, longitude } })
    }
        //errorの場合、エラーメッセージを返す
    const error: PositionErrorCallback = (error): void => {
        reject(new Error(error.message))
        }
        //クライアントの位置情報を取得
    navigator.geolocation.getCurrentPosition(success, error, options)
    })
}