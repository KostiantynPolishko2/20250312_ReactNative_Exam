import { StyleSheet, View } from "react-native";
// import styled from "styled-components/native";
import { PositionStyle } from "@/app/interface/styles/StylesApp";

export const WeaponsModelStyle = StyleSheet.create({
    body: {
        ...PositionStyle.row,
        backgroundColor: '#a6b3aa',
        marginTop: 5,
        padding: 5,
        width: '80%',
        position: 'relative',
        left: '10%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
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

export const WeaponsModelStyle2 = StyleSheet.create({
    body: {
        backgroundColor: '#8db89a',
        width: '100%',
        margin: 0,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
    },
    content: {
        width: '95%',
        borderRadius: 5,
    },
    textRow: {
        textAlign:'center',
        fontSize: 16,
        color: '#fafa4d',
        fontWeight: 700,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: 'black',
        textShadowRadius: 5,
    }
});