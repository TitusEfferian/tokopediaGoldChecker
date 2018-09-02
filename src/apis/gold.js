import { xhr, GET } from './apis';

export function goldApi(){
    return xhr('https://www.tokopedia.com/emas/api/gold/price',GET,null,null)
}