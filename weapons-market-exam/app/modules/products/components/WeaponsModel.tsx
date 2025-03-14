import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import { WeaponsModelStyle as styles } from "../styles/StylesWeaponsModel";
import useWeaponsModel from "../hooks/useWeaponsModel";


type WeaponsServiceProps = {
    weaponsService: IWeaponsServices;
    model: string,
}

const WeaponsModel: FC<WeaponsServiceProps> = ({weaponsService, model}) => {

    const {loading, error, weaponsModel} = useWeaponsModel(weaponsService, model);

    if (loading) return <Text>...loaded weapons model</Text>;
    
    if (error) throw new Error(error.message);
    
    // console.log('weapons model:', weaponsModel);

    return (
        <View style={styles.body}>
            <Image style={styles.body_img} source={{ uri: weaponsModel.image_path}} alt='weapons model'/>
            <View>
                <Text>weapons</Text>
                <Text>model: {weaponsModel.model}</Text>
                <Text>name: {weaponsModel.name}</Text>
                <Text>price: {weaponsModel.price}</Text>
            </View>
        </View>
    );
};

export default WeaponsModel;