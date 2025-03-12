import { StyleSheet } from "react-native";
import { StylesApp } from "@/app/interface/styles/StylesApp";

export const StylesHome = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#d9d9d9',
        width: '100%',
    },
    textRow: {
        textAlign:'center',
    }
});