import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import RecordData from "./RecordData";
import { StylesApp as  _styles} from "@/app/interface/styles/StylesApp";
import { WeaponsModelProps } from "../../../services/IWeaponsService";

const WeaponsData: FC<{data: WeaponsModelProps}> = ({data}) => {
    return(
        <View style={styles.body}>
            <RecordData type="model" value={data.model}/>
            <RecordData type="name" value={data.name}/>
            <RecordData type="price, uah" value={data.price.toString()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#5360a1',
        width: 130,
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: 75,
    }
});

export default WeaponsData;