import  { atom } from 'jotai'

const paginationAtom = atom(1) //現在のページ
const cardLengthAtom = atom(0)  //一回のfetchで取得されたレストランの数
const firstCardValueAtom = atom((get) => get(paginationAtom)*10-9) //表示される最初のカードの番号
const lastCardValueAtom = atom((get) => get(firstCardValueAtom) + get(cardLengthAtom) -1) //表示される最後のカードの番号
const maxCardAtom = atom(0)  //取得可能な範囲内のレストランの総数
const maxPageAtom = atom((get) => Math.ceil(get(maxCardAtom)/10)) //最大ページ数

export { paginationAtom, cardLengthAtom ,firstCardValueAtom , lastCardValueAtom ,maxCardAtom , maxPageAtom}