import React, { FC, useContext } from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet, Alert, Text } from "react-native";
import { ContextSetValueStr } from "../../../context/context";

const CloseButton: FC = () => {

    const setModel = useContext(ContextSetValueStr);

    return (
        <View style={styles.body}>
            <Button 
                title="CLOSE"
                onPress={()=>{setModel('');}}
                buttonStyle = {styles.buttonSize}
                titleStyle = {styles.buttonText}
            />
        </View>
    );
};

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