import React, { FC } from "react";
import { View, Text } from "react-native";
import { StylesOrders } from "../styles/StylesOrders";

const Auth: FC = () => {
    return(
        <View style={StylesOrders.body}>
            <Text style={StylesOrders.textRow}>orders module</Text>
        </View>
    );
};

export default Auth;