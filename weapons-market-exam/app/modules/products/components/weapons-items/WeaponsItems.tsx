import React, { FC, useMemo } from "react";
import { View, SectionList, Text } from "react-native";
import { IWeaponsServices } from "@/app/modules/products/services/IWeaponsService";
import { SectionListStyle, WeaponsItemsStyle } from "../../styles/StylesWeaponsItems";
import useWeaponsItems from "@/app/modules/products/hooks/useWeaponsItems";
// import { weaponsItemsData as weaponsItems } from "@/app/modules/products/mock/AdminServerTestData";
import { WeaponsItemProps } from "@/app/modules/products/services/IWeaponsService";
import WeaponsItemWrap2 from "@/app/modules/products/entities/WeaponsItemWrap2";
import {groupWeaponsItemsByName, getWeaponsItemsBySearch} from "@/app/modules/utils/TreatmentWeaponsItems";

type GroupWeaponsItem = {
    title: string, 
    data: WeaponsItemProps[],
}

type WeaponsServiceProps = {
    isHeader: boolean,
    input: string,
    weaponsService: IWeaponsServices;
}

const WeaponsItems: FC<WeaponsServiceProps> = (props) => {

    const {loading, error, weaponsItems} = useWeaponsItems(props.weaponsService);
    
    const groupWeaponsItems: GroupWeaponsItem[] = useMemo(()=>{
        return groupWeaponsItemsByName(weaponsItems);
    }, [weaponsItems]);
    
    const searchWeaponsItems: GroupWeaponsItem[] = useMemo(() => {
            return getWeaponsItemsBySearch(props.input, groupWeaponsItems);
        }, [props.input]);
        
    if (loading) return <Text>...loaded weapons items</Text>;
    
    if (error) throw new Error(error.message);
    
    // console.log('weapons items:', groupWeaponsItems);
    // console.log('weapons items:', searchWeaponsItems);

    return (
        <View style={WeaponsItemsStyle.body}>
            <SectionList
                style={SectionListStyle.container}
                stickySectionHeadersEnabled={true}
                sections={searchWeaponsItems || groupWeaponsItems}
                keyExtractor={(item, index) => `${index}_${item.model}`}
                renderSectionHeader={({section: {title}}) => (
                    props.isHeader? <Text style={SectionListStyle.header}>{title}</Text> : <></>
                )}
                renderItem={({item}) => (
                    <WeaponsItemWrap2 weaponsItemProps={item}/>
                )}
            />
        </View>
    );
};

export default WeaponsItems;