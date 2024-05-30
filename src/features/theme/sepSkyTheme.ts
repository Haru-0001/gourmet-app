import { nightTheme, twilightTheme, skyTheme } from'@/features/theme/skyTheme'

//時間帯によってテーマを変更
export function sepSkyTheme(skyState: string){
    if(skyState === "night"){
        return nightTheme
    }else if(skyState === "twilight"){
        return twilightTheme
    }else{
        return skyTheme
    }
}