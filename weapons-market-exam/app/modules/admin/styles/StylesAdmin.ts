import { StylesApp } from "@/app/interface/styles/StylesApp";
import { StyleSheet } from "react-native";

export const StylesAdmin = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#fafaca',
        width: '100%',
    },
    textRow: {
        textAlign:'center',
    }
});