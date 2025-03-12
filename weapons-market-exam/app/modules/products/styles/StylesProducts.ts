import { StylesApp } from "@/app/interface/styles/StylesApp";
import { StyleSheet } from "react-native";

export const StylesProducts = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#dfe7ed',
        width: '100%',
    },
    textRow: {
        textAlign:'center',
    }
});