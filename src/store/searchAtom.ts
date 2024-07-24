import { GetLocalRestaurant } from '@/types/GetLocalRestaurant'
import {atom} from 'jotai'

export const rangeAtom = atom<GetLocalRestaurant["range"]>(2)
export const isSliderAtom = atom(true)
export const searchBoxAtom = atom('')

