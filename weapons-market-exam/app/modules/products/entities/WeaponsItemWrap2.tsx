import React, { Component } from "react";
import { View } from "react-native";
import { WeaponsItemWrap as styles } from "../styles/StylesWeaponsItems";
import { WeaponsItemProps } from "../services/IWeaponsService";
import WeaponsItemRow from "../components/weapons-items/WeaponsItemRow";

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