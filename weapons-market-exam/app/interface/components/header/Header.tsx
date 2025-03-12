import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { StylesHeader } from "@/app/interface/styles/StylesHeader";

const Header: FC = () => {

    const router = useRouter();

    return(
        <View style={StylesHeader.body}>
            <View style={StylesHeader.btn}>
                <Button title="Home" onPress={() => router.push('/App')} color={'#767c7e'}/>
            </View>
            <Text style={StylesHeader.textRow}>header</Text>
        </View>
    );
};

export default Header;