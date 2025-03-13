import React, { FC } from "react";
import { View, Text } from "react-native";
import { IWeaponsServices } from "@/app/modules/products/services/IWeaponsService";
import { PositionStyle } from "@/app/interface/styles/StylesApp";
import useWeaponsItems from "@/app/modules/products/hooks/useWeaponsItems";
import WeaponsItemRow from "./WeaponsItemRow";
import { weaponsItemsData as weaponsItems } from "@/app/modules/products/mock/AdminServerTestData";
// import WeaponsItemWrap from "./WeaponsItemWrap";
import WeaponsItemWrap from "@/app/modules/utils/WeaponsItemWrap";
import WeaponsItemWrap2 from "@/app/modules/utils/WeaponsItemWrap2";

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
                // version 1 of FC due to DI
                // <WeaponsItemWrap key={index} FC={WeaponsItemRow} weaponsItemProps={weaponsItem}/>

                // version 2 of FC due to DI
                <WeaponsItemWrap2 key={index} weaponsItemProps={weaponsItem}/>
            ))}
        </View>
    );
};

export default WeaponsItems;