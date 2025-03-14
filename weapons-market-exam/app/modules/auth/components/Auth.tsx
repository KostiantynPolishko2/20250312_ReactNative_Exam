import React, { FC } from "react";
import { View, Text } from "react-native";
import { StylesAuth } from "../styles/StylesAuth";

const Auth: FC = () => {
    return(
        <View style={StylesAuth.body}>
            <Text style={StylesAuth.textRow}>auth module</Text>
        </View>
    );
};

export default Auth;