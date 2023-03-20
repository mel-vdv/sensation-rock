import {data} from './../../data/concours'

export const getConcours = ()=>{
    return new Promise ((resolve)=>{
        resolve(data);
    });
}