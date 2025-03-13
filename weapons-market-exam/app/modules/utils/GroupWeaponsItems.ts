import _ from 'lodash';
import { WeaponsItemProps } from '../products/services/IWeaponsService';

type GroupWeaponsItem = {
    title: string, 
    data: WeaponsItemProps[],
}

const groupWeaponsItemsByName = (weaponsItems: WeaponsItemProps[]): GroupWeaponsItem[] => {
    
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

export default groupWeaponsItemsByName