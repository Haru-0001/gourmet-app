'use client'
import { GetLocalRestaurant } from "@/types/GetLocalRestaurant";
import { useEffect, useState } from "react";
import { getLocation } from "@/api/location/getLocation";
import { getRestaurants } from "@/api/restaurants/default/getRestaurants";
import { RestaurantCard } from "@/types/RestaurantCard";
import { cardMapper } from "@/features/restaurant/card/cardMapper";
import { useAtomValue, useSetAtom } from "jotai";
import { cardLengthAtom, firstCardValueAtom, maxCardAtom } from "@/store/paginationAtom";
import { rangeAtom, rangeNumAtom } from "@/store/searchAtom";
import { Modal } from "./modal";

// ユーザーの位置情報を取得し、その位置情報を元にレストランのデータを取得する
export const Card = () =>{
    const [cards, setCards] = useState<RestaurantCard[]>([]);

    const cardNum = useAtomValue(firstCardValueAtom);
    const range = useAtomValue(rangeAtom);
    const setMaxPage = useSetAtom(maxCardAtom);
    const setCardLength = useSetAtom(cardLengthAtom);
    const rangeNum = useAtomValue(rangeNumAtom);

    const getUserRestaurants = async () => {
        const location = await getLocation();
        const params: GetLocalRestaurant = {
            start: cardNum,
            range: range as GetLocalRestaurant["range"],
            latitude: location.latitude,
            longitude: location.longitude
        };
        const response = await getRestaurants(params);
        const restaurantCards = cardMapper(response);
        setCards(restaurantCards);
        setCardLength(response.results.shop.length);
        setMaxPage(response.results.results_available);
    };

    useEffect(() => {
        getUserRestaurants();
    }, [cardNum,range]);

    return (
    // レストランのデータをカードに表示
    <div className="flex flex-col items-center my-12">
    {cards.length >0 ? (
        <>
        {rangeNum !== undefined && (
            <h2 className="p-4 text-xl">現在地から{rangeNum}m以内のレストランを表示中</h2>
        )}
        {cards.map((restaurant: RestaurantCard) => (
            <Modal img={restaurant.photo}>
            <div key={restaurant.key} className="w-9/12 my-4 flex flex-col bg-white border border-gray-200 rounded-lg shadow-xl hover:bg-gray-100 md:flex-row md:max-w-2xl md:h-60">
            <img className="object-cover w-full rounded-t-lg h-56 md:h-full md:w-48 md:rounded-none md:rounded-s-lg md:aspect-square" src={restaurant.photo}/>
                <div className="flex flex-col justify-between h-full p-4 space-y-2">
                    <h3 className="basis-1/2 text-2xl font-bold tracking-tight text-gray-900 md:overflow-hidden">{restaurant.title}</h3>
                    <p className="basis-1/4 font-normal text-gray-700 md:line-clamp-2">{restaurant.pr}</p>
                    <p className="basis-1/4 font-normal text-sm text-gray-500 md:line-clamp-2 md:pt-1">{restaurant.access}</p>
                </div>
            </div>
            </Modal>
        ))}
        </>
    ) : (
        <div className="text-gray-500">近くにレストランがありません</div>
    )}
    </div>
    )
}