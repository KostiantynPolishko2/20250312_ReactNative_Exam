import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";

const WeaponsImage: FC<{image_path: string}> = ({image_path}) => {

    return(
        <Image 
            style={styles.body} 
            source={{uri: image_path}}
            alt=''
        />
    );
};

const styles = StyleSheet.create({
    body: {
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5,
    }
});

export default WeaponsImage;