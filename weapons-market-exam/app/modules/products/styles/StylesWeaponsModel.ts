import { StyleSheet } from "react-native";
import { PositionStyle } from "@/app/interface/styles/StylesApp";

export const WeaponsModelStyle = StyleSheet.create({
    body: {
        backgroundColor: 'wheat',
        padding: 5,
        ...PositionStyle.row,
        justifyContent: 'space-around',
    },
    body_img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    }
});