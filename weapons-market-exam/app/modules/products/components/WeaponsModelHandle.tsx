import React, { FC } from "react";
import { View, Text} from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import { WeaponsModelStyle as styles } from "../styles/StylesWeaponsModel";
import useWeaponsModel from "../hooks/useWeaponsModel";
import WeaponsModel from "./weapons-model/WeaponsModel";
import { weaponsModelData } from "../mock/AdminServerTestData";

type WeaponsServiceProps = {
    weaponsService: IWeaponsServices;
    model: string,
}

const WeaponsModelHandle: FC<WeaponsServiceProps> = ({weaponsService, model}) => {

    const {loading, error, weaponsModel} = useWeaponsModel(weaponsService, model);

    if (loading) return <Text>...loaded weapons model</Text>;
    
    if (error) throw new Error(error.message);
    
    // console.log('weapons model:', weaponsModel.image_path);

    return (
        <View style={styles.body}>
            <WeaponsModel item={weaponsModel}/>
        </View>
    );
};

export default WeaponsModelHandle;