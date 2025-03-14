import React, { Component } from "react";
import { View } from "react-native";
import { WeaponsItemWrap as styles } from "@/app/modules/products/styles/StylesWeaponsItems";
import { WeaponsItemProps } from "../services/IWeaponsService";

type Props = {
    FC: React.ElementType,
    weaponsItemProps: WeaponsItemProps,
}

class WeaponsItemWrap extends Component<Props> {

    constructor(props: Props){
        super(props);
    }

    render() {

        const { FC, weaponsItemProps } = this.props;

        return(
            <View style={styles.body}>
                <FC weaponsItem = {weaponsItemProps}/>
            </View>
        );
    }
}

export default WeaponsItemWrap;