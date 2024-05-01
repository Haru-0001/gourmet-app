export type LiteRestaurant = {
    results: {
        api_version: string,
        results_available: number,
        results_returned: string,
        results_start: number,
        shop: [
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
}