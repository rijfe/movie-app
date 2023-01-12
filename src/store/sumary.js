import { atom, selector } from "recoil"

const sumaryInfo = atom({
    key:'sumaryInfo',
    default: '',
});

const getSumary = selector({
    key: 'getSumary',
    get: ({get})=>{
        const text = get(sumaryInfo);
        return text;
    }
});

export { sumaryInfo, getSumary};