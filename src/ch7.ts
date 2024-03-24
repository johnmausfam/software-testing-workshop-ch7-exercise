export function validateNumber(x:number, y:number, target:number):boolean{
    if((x > 0 || y > 0) && target > 0){
        const xIsFactorOfTarget = target % x === 0;
        const yIsMultipleOfTarget = y % target === 0;
        if(xIsFactorOfTarget && yIsMultipleOfTarget){
            return true;
        }
    }

    return false;
}