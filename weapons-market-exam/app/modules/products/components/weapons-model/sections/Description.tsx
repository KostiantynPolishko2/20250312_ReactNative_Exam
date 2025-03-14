import React, { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

type DescriptionProps = {
    description: string,
}

const Description: FC<DescriptionProps> = ({description}) => {
    
    const [isShow, setShow] = useState<boolean>(false);

    const handleShowHideText = (flag: boolean) => {
        setShow(flag);
    }

    return(
        <View 
            onTouchStart={()=>{handleShowHideText(true)}}
            onTouchEnd={()=>{handleShowHideText(false)}}
            style={[styles.body, {minHeight: !isShow? 25 : 0}]}>
            <Text 
                style={styles.text}
                numberOfLines={!isShow? 1 : 0} 
                ellipsizeMode="middle"
            >{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '95%',
        justifyContent: 'center',
        backgroundColor: '#74af60',
        margin: 5,
        boxShadow: '2 2 5 black',
        borderRadius: 5,
        borderCurve: 'continuous',
    },
    fullTxt : {
        flex: 0,
    },
    shortTxt: {
        flex: 1,
        height: 30
    },
    text: {
        padding: 5,
        textAlign: 'center',
        alignContent: 'center',
    }
});

export default Description;