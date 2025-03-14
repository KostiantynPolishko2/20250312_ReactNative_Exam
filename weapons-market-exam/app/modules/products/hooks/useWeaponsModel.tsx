import { useState, useEffect } from "react";
import { WeaponsModelProps } from "../services/IWeaponsService";
import useGetWeaponsCardDto from "@/app/interface/hooks/useGetWeaponsCardDto";
import { IWeaponsServices } from "../services/IWeaponsService";
import { weaponsModelDefault } from "@/app/interface/constants/Weapons";

const useWeaponsModel = (weaponsService: IWeaponsServices, model: string) => {

    const {error, loading, weaponsCardDto, get} = useGetWeaponsCardDto(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '');
    const [weaponsModel, setWeaponsModel] = useState<WeaponsModelProps>(weaponsModelDefault);

    useEffect(()=>{
        (async ()=>{ await get(model)})();
    }, [model]);

    useEffect(()=>{
        if(weaponsCardDto)
            setWeaponsModel(weaponsService.getWeaponsModel(weaponsCardDto));
    }, [weaponsCardDto]);

    return {loading, error, weaponsModel};
};

export default useWeaponsModel;