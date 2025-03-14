import React, { FC } from "react";
import { View, Text } from "react-native";
import WeaponsImage from "./sections/WeaponsImage";
import WeaponsData from "./sections/WeaponsData";
import OrderButton from "./sections/OrderButton";
import CloseButton from "./sections/CloseButton";
import Description from "./sections/Description";
import { WeaponsModelProps } from "../../services/IWeaponsService";
import { PositionStyle } from "@/app/interface/styles/StylesApp";
import { WeaponsModelStyle2 as StylesCard } from "@/app/modules/products/styles/StylesWeaponsModel";

const WeaponsModel:FC<{item: WeaponsModelProps}> = ({item}) => {

    const bgColor = item.isVisible? '#7b99a3' : '#a3a395';

    return(
        <View style={[StylesCard.body, PositionStyle.column]}>
            <Text style={[StylesCard.textRow, {color: 'wheat'}]}>{item.model.toLocaleUpperCase()}</Text>
            <View style={[PositionStyle.row, StylesCard.content, {backgroundColor: bgColor}]}>
                <WeaponsImage image_path={item.image_path}/>
                <View>
                    <WeaponsData data={item}/>
                    <View style={PositionStyle.row}>
                        <OrderButton isAble={item.isVisible} handleOrder={()=>{}}/>
                        <CloseButton isAble={true} handleClose={()=>{}}/>
                    </View>
                </View>
            </View>
            <Description description="It is not the weapon that kills, but the man. Samuel Colt (1814-1862)."/>
        </View>
    );
};

export default WeaponsModel;