import React, { FC } from "react";
import { View, Text } from "react-native";
import { StylesAdmin } from "../styles/StylesAdmin";

const Auth: FC = () => {
    return(
        <View style={StylesAdmin.body}>
            <Text style={StylesAdmin.textRow}>admin module</Text>
        </View>
    );
};

export default Auth;