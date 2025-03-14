import React, { FC } from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet, Alert, Text } from "react-native";

type CloseButtonProps = {
    isAble?: boolean,
    handleClose: ()=>void,
}

const CloseButton: FC<CloseButtonProps> = (props) => 
    <View style={styles.body}>
        <Button 
            title="CLOSE"
            onPress={props.handleClose}
            buttonStyle = {styles.buttonSize}
            titleStyle = {styles.buttonText}
            disabled = {!props.isAble}
        />
    </View>

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,      
    },
    buttonSize: {
        width: 60,
        padding: 0,
        backgroundColor: '#4d5658',
    },
    buttonText: {
        fontSize: 14,
        // lineHeight: 30,
    }
});

export default CloseButton;