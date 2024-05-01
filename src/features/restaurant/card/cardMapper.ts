import { LiteRestaurant } from "@/types/LiteRestaurant";
import { CardType } from "@/types/CardType";

export function cardMapper(jsonData: LiteRestaurant): CardType[] {
    const shopCard = jsonData.shop.map((shop: { photo: { pc: { m: string; }; }; name: string; catch: string; }, index: number) => ({
        key: index,
        photo: shop.photo.pc.m,
        title: shop.name,
        pr: shop.catch
    }));
    return shopCard
}
