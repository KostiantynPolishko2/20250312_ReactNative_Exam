import React, { Component } from "react";
import { View } from "react-native";
import { WeaponsItem as styles } from "../products/styles/StylesWeaponsItems";
import { WeaponsItemProps } from "../products/services/IWeaponsService";

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