export const serverTime = () =>{
    const JSTime = new Date().toLocaleString("en-GB", {
        timeZone: "JST",
        hour: "numeric",
    });
    const JSTimeNum = isNaN(Number(JSTime))? 12 : Number(JSTime);
    console.log("JSTime:", JSTime);
    return JSTimeNum
}