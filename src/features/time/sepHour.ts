const nightTheme = "bg-indigo-950"
const twilightTheme = "bg-orange-400"
const noonTheme = "bg-sky-300"

export function sepHour(hour: number): string {
    if(hour >= 18 || hour <= 4){
        return nightTheme
    }else if(hour <= 6 || hour >= 16){
        return twilightTheme
    }else{
        return noonTheme
    }
}
