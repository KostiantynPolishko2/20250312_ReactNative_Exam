import React, { FC, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FeatherIcon from '@expo/vector-icons/Feather';
import { WeaponsItemRow as styles } from "@/app/modules/products/styles/StylesWeaponsItems";
import { WeaponsItemProps } from "../../services/IWeaponsService";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ContextSetValueStr } from "../../context/context";

const WeaponsItemRow: FC<{weaponsItem: WeaponsItemProps}> = ({weaponsItem}) => {
 
    const setModel = useContext(ContextSetValueStr);

    return(
        <View style={styles.cardWrapper}>
          <TouchableOpacity onPress={() => {setModel(weaponsItem.model);}}>
            <View style={styles.card}>
                <View style={[styles.cardImg, styles.cardAvatar]}>
                    <MaterialCommunityIcons style={[styles.cardAvatarText, styles.textShadow]} name='pistol'/>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{weaponsItem.model}&nbsp;{weaponsItem.price} UAH</Text>
                    <Text style={styles.cardPhone}>{weaponsItem.name}</Text>
                </View>
                <View style={styles.cardAction}>
                    <FeatherIcon
                        color="#9ca3af"
                        name="chevron-right"
                        size={22} 
                    />
                </View>
            </View>
          </TouchableOpacity>
        </View>
    );
};

export default WeaponsItemRow;