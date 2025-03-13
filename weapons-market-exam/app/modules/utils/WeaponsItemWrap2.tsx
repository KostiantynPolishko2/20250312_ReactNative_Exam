import React, { Component } from "react";
import { View } from "react-native";
import { WeaponsItem as styles } from "../products/styles/StylesWeaponsItems";
import { WeaponsItemProps } from "../products/services/IWeaponsService";
import WeaponsItemRow from "../products/components/weapons-items/WeaponsItemRow";

type Props = {
    weaponsItemProps: WeaponsItemProps
}

class WeaponsItemWrap2 extends Component<Props> {

    constructor(props: Props){
        super(props);
    }

    render() {

        const { weaponsItemProps } = this.props;

        return(
            <View style={styles.body}>
                <WeaponsItemRow weaponsItem = {weaponsItemProps}/>
            </View>
        );
    }
}

export default WeaponsItemWrap2;