import React, { FC, useMemo } from "react";
import { View, SectionList, Text } from "react-native";
import { IWeaponsServices } from "@/app/modules/products/services/IWeaponsService";
// import { PositionStyle } from "@/app/interface/styles/StylesApp";
import { SectionListStyle } from "../../styles/StylesWeaponsItems";
import useWeaponsItems from "@/app/modules/products/hooks/useWeaponsItems";
import { weaponsItemsData as weaponsItems } from "@/app/modules/products/mock/AdminServerTestData";
import { WeaponsItemProps } from "@/app/modules/products/services/IWeaponsService";
// import WeaponsItemWrap from "@/app/modules/utils/WeaponsItemWrap";
import WeaponsItemWrap2 from "@/app/modules/utils/WeaponsItemWrap2";
import { StylesProducts } from "../../styles/StylesProducts";
import groupWeaponsItemsByName from "@/app/modules/utils/GroupWeaponsItems";

type GroupWeaponsItem = {
    title: string, 
    data: WeaponsItemProps[],
}

interface WeaponsServiceProps {
    weaponsService: IWeaponsServices;
}

const WeaponsItems: FC<WeaponsServiceProps> = ({weaponsService}) => {

    // const {loading, error, weaponsItems} = useWeaponsItems(weaponsService);

    // if (loading) return <Text>...loaded weapons items</Text>;
    // if (error) throw new Error(error.message);

    const groupWeaponsItems: GroupWeaponsItem[] = useMemo(()=>{
        return groupWeaponsItemsByName(weaponsItems);
    }, [weaponsItems]);

    // console.log('groupWeaponsItems = ', groupWeaponsItems);

    return (
        <View>
            <View>
                <Text style={StylesProducts.textRow}>weapons items</Text>
            </View>
            <SectionList
                style={SectionListStyle.container}
                stickySectionHeadersEnabled={true}
                sections={groupWeaponsItems || []}
                keyExtractor={(item, index) => `${index}_${item.model}`}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={SectionListStyle.header}>{title}</Text>
                )}
                renderItem={({item}) => (
                    <WeaponsItemWrap2 weaponsItemProps={item}/>
                )}
            />
            <View>
                <Text style={StylesProducts.textRow}>weapons model</Text>
            </View>
        </View>
    );
};

export default WeaponsItems;