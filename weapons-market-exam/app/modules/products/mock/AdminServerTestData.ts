import { WeaponsDataDtoProps } from "@/app/interface/types/AdminServerTypes";
import { WeaponsItemProps } from "../services/IWeaponsService";

export const weaponsItemsProps: WeaponsItemProps[] = [
    { name: 'Пистолет', isVisible: true, model: 'model1', price: 1001, },
    { name: 'Пистолет', isVisible: true, model: 'model2', price: 1002, },
    { name: 'Снайперская вистовка', isVisible: true, model: 'model3', price: 1003, },
    { name: 'Снайперская вистовка', isVisible: true, model: 'model4', price: 1004, },
    { name: 'Автомат', isVisible: true, model: 'model5', price: 1005, },
    { name: 'Автомат', isVisible: true, model: 'model6', price: 1006, },
    { name: 'Автомат', isVisible: true, model: 'model7', price: 1007, },
];

export const newWeaponsModels: WeaponsDataDtoProps[] = [
    {
        weaponsImage: { name: 'img_name1', path: 'img_path1' },
        weaponsItem: { Model: 'model1', Name: 'name1', Type: 'type1', isVisible: false },
        weaponsProperty: { price: 1, weight: 1.1, Vendor: 'property_vendor1', Description: 'property_description1' }
    },
    {
        weaponsImage: { name: 'img_name2',path: 'img_path2' },
        weaponsItem: { Model: 'model2',Name: 'name2',Type: 'type2',isVisible: false },
        weaponsProperty: { price: 2,weight: 2.2,Vendor: 'property_vendor2',Description: 'property_description2' }
    }
];