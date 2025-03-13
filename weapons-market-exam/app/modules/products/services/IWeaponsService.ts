import { WeaponsCardDtoProps } from "@/app/interface/types/AdminServerTypes";

export type WeaponsItemProps = {
    name: string,
    isVisible: boolean,
    model: string,
    price: number,
}

export type WeaponsModelProps = WeaponsItemProps & {
    image_path: string,
}

export interface IWeaponsServices {

    getWeaponsItems(weaponsCardDto: WeaponsCardDtoProps[]): WeaponsItemProps[];

    getWeaponsModel(weaponsCardDto: WeaponsCardDtoProps): WeaponsModelProps;
};