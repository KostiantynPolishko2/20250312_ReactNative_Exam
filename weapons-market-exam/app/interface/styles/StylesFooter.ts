import { StyleSheet } from "react-native";
import { StylesApp } from "./StylesApp";

export const StylesFooter = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#8C1C13',
        height: 50,
    },
    text: {
        color: 'white',
    }
});