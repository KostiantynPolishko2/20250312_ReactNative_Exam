import { StyleSheet, StatusBar } from "react-native";
import { StylesApp } from "@/app/interface/styles/StylesApp";

export const WeaponsItemRow = StyleSheet.create({
    card: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: '#9ca1ac',
        backgroundColor: '#afd4ba',
    },
    cardImg: {
        width: 35,
        height: 35,
        borderRadius: 7,
        marginLeft: 5,
    },
    cardAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8da7b0',
    },
    cardAvatarText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    cardBody: {
        marginRight: 'auto',
        marginLeft: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000',
    },
    cardPhone: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: '#616d79',
        marginTop: 3,
    },
    cardAction: {
        paddingRight: 16,
    },
    textShadow: {
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#5c5a56',
        textShadowRadius: 4,
    }
});

export const WeaponsItemWrap = StyleSheet.create({
    body: {
        marginTop: 2,
        // minWidth: '80%',
    }
});

export const WeaponsItemsStyle = StyleSheet.create({
    body: {
        width: '80%', 
        height: '65%',
        position: 'relative', 
        left: '10%',
    }
});

export const SectionListStyle = StyleSheet.create({
    container: {
        padding: 5,
        minWidth: '80%',
        backgroundColor: '#aebfbf',
        borderRadius: 5,
    },
    header: {
        fontSize: 16,
        backgroundColor: '#969393',
        color: 'wheat',
        paddingLeft: 5,
        textShadowOffset: {width:2, height: 2},
        textShadowRadius: 4,
        textShadowColor: 'black',
        borderBottomWidth: 1,
        borderColor: '#757474',
    },
    title: {
        fontSize: 24,
    },
});