export type LiteShop = {
    shop:[
    {
        id: string,
        name: string,
        address: string,
        lat: number,
        lng: number,
        genre: {
            name: string,
            catch: string
        },
        catch: string,
        access: string,
        urls: {
            pc: string
        },
        photo: {
            pc: {
                l: string,
                m: string,
                s: string
            }
        },
        other_memo: string,
        shop_detail_memo: string,
        budget_memo: string
    }
    ]
}