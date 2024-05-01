import { LiteRestaurant } from "@/types/LiteRestaurant";
import { RestaurantCard } from "@/types/RestaurantCard";

export function cardMapper(jsonData: LiteRestaurant): RestaurantCard[] {
    const shopCard = jsonData.results.shop.map((
        shop:{
            photo:{
                pc: {l: string;};
            };
            name: string;
            catch: string;
        },
        index: number
        ) => ({
        key: index,
        photo: shop.photo.pc.l,
        title: shop.name,
        pr: shop.catch
    }));
    return shopCard
}
