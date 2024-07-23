import { firstCardValueAtom, lastCardValueAtom, maxCardAtom} from "@/store/paginationAtom";
import { useAtomValue } from "jotai";

export const PageSign = () => {
    const firstCardValue = useAtomValue(firstCardValueAtom);
    const lastCardValue = useAtomValue(lastCardValueAtom);
    const maxCard = useAtomValue(maxCardAtom);
    return (
        firstCardValue == lastCardValue ? (
            <div className="flex justify-center">
                <p>
                    {lastCardValue} 件のレストランを表示中
                </p>
            </div>
        ) : (
        <div className="flex justify-center">
            <p>
                {maxCard} 件中 {firstCardValue} ～ {lastCardValue} 件のレストランを表示中
            </p>
        </div>
        )
    );
}
