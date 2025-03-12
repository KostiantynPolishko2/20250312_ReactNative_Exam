import { StyleSheet } from "react-native";

export const StylesApp = StyleSheet.create({
    flex_row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    flex1_center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const PositionStyle = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});