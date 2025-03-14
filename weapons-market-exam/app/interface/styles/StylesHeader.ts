import { StyleSheet } from "react-native";
import { StylesApp } from "./StylesApp";

export const StylesHeader = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#B0A743',
        height: 50,
    },
    btn: {
        position: 'absolute',
        left: 15,
    },
    textRow: {
        textAlign: 'center',
        color: 'white',
    }
});