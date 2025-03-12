import { StylesApp } from "@/app/interface/styles/StylesApp";
import { StyleSheet } from "react-native";

export const StylesAuth = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#d6fcbb',
        width: '100%',
    },
    textRow: {
        textAlign:'center',
    }
});