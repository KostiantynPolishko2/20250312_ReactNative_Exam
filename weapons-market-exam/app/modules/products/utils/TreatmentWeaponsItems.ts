import _ from 'lodash';
import { WeaponsItemProps } from '../services/IWeaponsService';

type GroupWeaponsItem = {
    title: string, 
    data: WeaponsItemProps[],
}

export const groupWeaponsItemsByName = (weaponsItems: WeaponsItemProps[]): GroupWeaponsItem[] => {
    
    const result: GroupWeaponsItem[] = _.chain(weaponsItems).
    map((item) => ({
        name: item.name,
        isVisible: item.isVisible,
        model: item.model,
        price: item.price,
    })).
    groupBy((item) => item.name.charAt(0).toUpperCase()).   // group by first letter of name weapons
    map((items, letter) => ({title: letter, data: items})).
    orderBy(['title'], ['asc']).
    value();

    return result;
}

export const getWeaponsItemsBySearch = (input: string, groupWeaponsItems: GroupWeaponsItem[]): GroupWeaponsItem[] => {

    const result: GroupWeaponsItem[] = _.chain(groupWeaponsItems).
        map((section) => ({
            title: section.title,
            data: section.data.filter(item => (
                item.model.toLocaleLowerCase().startsWith(input) || 
                item.name.toLocaleLowerCase().startsWith(input)
            )),
        })).
        filter(section => section.data.length >0 ). // remove empty sections
        value();

    return result;
}

export default getWeaponsItemsBySearch;