export type Restaurant = {
    results: {
        api_version: string,
        results_available: number,
        results_returned: string,
        results_start: number,
        shop: [
            {
                id: string,
                name: string,
                logo_image: string,
                name_kana: string,
                address: string,
                station_name: string,
                ktai_coupon: number,
                large_service_area: {
                    code: string,
                    name: string
                },
                service_area: {
                    code: string,
                    name: string
                },
                large_area: {
                    code: string,
                    name: string
                },
                middle_area: {
                    code: string,
                    name: string
                },
                small_area: {
                    code: string,
                    name: string
                },
                lat: number,
                lng: number,
                genre: {
                    name: string,
                    catch: string,
                    code: string
                },
                budget: {
                    code: string,
                    name: string,
                    average: string
                },
                catch: string,
                capacity: number,
                access: string,
                mobile_access: string,
                urls: {
                    pc: string
                },
                photo: {
                    pc: {
                        l: string,
                        m: string,
                        s: string
                    },
                    mobile: {
                        l: string,
                        s: string
                    }
                },
                open: string,
                close: string,
                party_capacity: number,
                other_memo: string,
                shop_detail_memo: string,
                budget_memo: string,
                wedding: string,
                course: string,
                free_drink: string,
                free_food: string,
                private_room: string,
                horigotatsu: string,
                tatami: string,
                card: string,
                non_smoking: string,
                charter: string,
                parking: string,
                barrier_free: string,
                show: string,
                karaoke: string,
                band: string,
                tv: string,
                lunch: string,
                midnight: string,
                english: string,
                pet: string,
                child: string,
                wifi: string,
                coupon_urls: {
                    pc: string,
                    sp: string
                }
            }
        ]
    }
}
