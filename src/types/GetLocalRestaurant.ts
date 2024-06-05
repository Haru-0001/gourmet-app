import { Coordinate } from '@/types/Coordinate'

type GetLocalRestaurant = Coordinate & {
    start: number,
    range: 1 | 2 | 3 | 4 | 5
}

export type { GetLocalRestaurant }