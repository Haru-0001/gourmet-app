export function sepHour(hour: number): string {
    if(hour >= 18 || hour <= 4){
        return "night"
    }else if(hour <= 6 || hour >= 16){
        return "twilight"
    }else if(hour <= 10){
        return "morning"
    }
    else{
        return "noon"
    }
}
