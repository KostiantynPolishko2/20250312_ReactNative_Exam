import React, { FC } from "react";
import { View, Text } from "react-native";
import { StylesFooter } from "@/app/interface/styles/StylesFooter";

const Footer: FC = () => {
    return(
        <View style={StylesFooter.body}>
            <Text style={StylesFooter.text}>footer</Text>
        </View>
    );
};

export default Footer;