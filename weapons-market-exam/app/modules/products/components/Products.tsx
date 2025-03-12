import React, { FC } from "react";
import { View, Text } from "react-native";
import { StylesProducts } from "../styles/StylesProducts";

const Auth: FC = () => {
    return(
        <View style={StylesProducts.body}>
            <Text style={StylesProducts.textRow}>products module</Text>
        </View>
    );
};

export default Auth;