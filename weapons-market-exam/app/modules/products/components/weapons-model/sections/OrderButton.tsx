import React, { FC } from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet, Alert, Text } from "react-native";

type OrderButtonProps = {
    isAble?: boolean,
    handleOrder: ()=>void,
}

const OrderButton: FC<OrderButtonProps> = (props) => 
    <View style={styles.body}>
        <Button 
            title="ORDER"
            onPress={props.handleOrder}
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
        backgroundColor: '#ff0011',
    },
    buttonText: {
        fontSize: 14,
        // lineHeight: 30,
    }
});

export default OrderButton;