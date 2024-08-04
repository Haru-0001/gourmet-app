import {atom} from 'jotai'

export const rangeAtom = atom(2)
export const isSliderAtom = atom(true)
export const searchBoxAtom = atom('')

export const rangeNumAtom = atom((get) => {
    const range = get(rangeAtom);
    if(range === 1){
        return 300;
    }else if(range === 2){
        return 500;
    }
    else if(range === 3){
        return 1000;
    }
    else if(range === 4){
        return 2000;
    }
    else if (range === 5){
        return 3000;
    }else{
        return undefined;
    }
});