"use client"
import { isSliderAtom } from '@/store/searchAtom';
import { themeColor } from '@/store/themes';
import { ThemeTimeType } from '@/types/ThemeTime';
import { useAtom } from 'jotai';

//ヘッダーのスライダーのTrue/Falseを切り替えるボタン
const IsSliderButton = (props:{time:ThemeTimeType}) =>{
    const time = props.time;
    const theme = themeColor[time].primaryAction
    const [isChecked, setIsChecked] = useAtom(isSliderAtom);
    const sliderCheck = () =>{
        setIsChecked(!isChecked);
    }

    return(
        <div className="relative">
            <button onClick={()=> sliderCheck()} className="absolute -top-1 flex justify-center  items-center size-6 bg-slate-100 rounded-full transition-transform duration-200 hover:scale-110">
                {isChecked && <div className={`size-3  rounded-full ${theme}`}></div>}
            </button>
        </div>
    )
}
export {IsSliderButton}