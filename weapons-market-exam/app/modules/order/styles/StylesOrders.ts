import { StylesApp } from "@/app/interface/styles/StylesApp";
import { StyleSheet } from "react-native";

export const StylesOrders = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#ebd8d9',
        width: '100%',
    },
    textRow: {
        textAlign:'center',
    }
});