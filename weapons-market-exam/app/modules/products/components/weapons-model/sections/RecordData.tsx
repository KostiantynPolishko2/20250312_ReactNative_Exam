import React, {FC} from "react";
import { View, Text, StyleSheet } from "react-native";
// import { styles as _styles } from "@/app/constants/styles";
import { StylesApp as _styles } from "@/app/interface/styles/StylesApp";

type RecordDataProps = {
    type: string,
    value?: string,
}

const RecordData: FC<RecordDataProps> = ({type, value}) => (
    <View style={[_styles.flex_row, styles.body]}>
        <Text style={styles.rowText}>{type}</Text>
        <Text style={styles.rowText}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#8089b4',
        marginBottom: 2,
        padding: 0,
    },
    rowText: {
        color: '#171b2c',
        fontWeight: 700,
        lineHeight: 20,
    },
});

export default RecordData;