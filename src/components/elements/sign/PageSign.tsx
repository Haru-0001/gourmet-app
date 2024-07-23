import { firstCardValueAtom, lastCardValueAtom} from "@/store/paginationAtom";
import { useAtomValue } from "jotai";

export const PageSign = () => {
    const firstCardValue = useAtomValue(firstCardValueAtom);
    const lastCardValue = useAtomValue(lastCardValueAtom);
    return (
        firstCardValue == lastCardValue ? (
            <div className="flex justify-center">
                <p>
                    表示中のレストラン: No.{lastCardValue}
                </p>
            </div>
        ) : (
        <div className="flex justify-center">
            <p>
                表示中のレストラン: No.{firstCardValue} ～ {lastCardValue}
            </p>
        </div>
        )
    );
}
