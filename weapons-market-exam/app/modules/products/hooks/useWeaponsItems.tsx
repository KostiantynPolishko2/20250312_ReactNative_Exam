import { useState, useEffect } from "react";
import { WeaponsItemProps } from "../services/IWeaponsService";
import useGetWeaponsCardsDto from "./useGetWeaponsCardsDto";
import { IWeaponsServices } from "../services/IWeaponsService";

const useWeaponsItems = (weaponsService: IWeaponsServices) => {

    const {error, loading, weaponsCardsDto, get} = useGetWeaponsCardsDto(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '');
    const [weaponsItems, setWeaponsItems] = useState<WeaponsItemProps[]>([])

    useEffect(()=>{
        (async ()=>{ await get()})();
    }, [weaponsService]);

    useEffect(()=>{
        if(weaponsCardsDto?.length)
            setWeaponsItems(weaponsService.getWeaponsItems(weaponsCardsDto));
    }, [weaponsCardsDto]);

    return {loading, error, weaponsItems};
};

export default useWeaponsItems;