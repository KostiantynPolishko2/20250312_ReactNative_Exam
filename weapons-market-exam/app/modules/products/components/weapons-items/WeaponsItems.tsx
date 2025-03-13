import React, { FC } from "react";
import { View } from "react-native";
import { IWeaponsServices } from "@/app/modules/products/services/IWeaponsService";
import { PositionStyle } from "@/app/interface/styles/StylesApp";
import useWeaponsItems from "@/app/modules/products/hooks/useWeaponsItems";
import WeaponsItemRow from "./WeaponsItemRow";
import { weaponsItemsProps as weaponsItems } from "@/app/modules/products/mock/AdminServerTestData";

interface WeaponsServiceProps {
    weaponsService: IWeaponsServices;
}

const WeaponsItems: FC<WeaponsServiceProps> = ({weaponsService}) => {

    // const {loading, error, weaponsItems} = useWeaponsItems(weaponsService);

    // if (loading) return <Text>...loaded weapons items</Text>;
    // if (error) throw new Error(error.message);

    return (
        <View style={PositionStyle.column}>
            {weaponsItems.map((weaponsItem, index) => (
                <View key={index} style={{marginTop: 2}}>
                    <WeaponsItemRow weaponsItem={weaponsItem}/>
                </View>
            ))}
        </View>
    );
};

export default WeaponsItems;