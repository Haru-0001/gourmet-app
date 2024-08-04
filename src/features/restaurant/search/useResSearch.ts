import { paginationAtom } from "@/store/paginationAtom";
import { rangeAtom } from "@/store/searchAtom";
import { useSetAtom } from "jotai";

export const useResSearch = (range: number) => {
    const setRangeAtom = useSetAtom(rangeAtom);
    const setPaginationAtom = useSetAtom(paginationAtom);
    const onResSearch = () => {
        setRangeAtom(range);
        setPaginationAtom(1)
    };
    return onResSearch;
}