import { StyleSheet } from "react-native";
import { StylesApp } from "./StylesApp";

export const StylesNav = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        padding: 5,
        backgroundColor: '#227C9D',
    }
});