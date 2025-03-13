import React, { FC } from "react";
import { View, Text } from "react-native";
import { StylesProducts } from "../styles/StylesProducts";
import WeaponsItems from "./weapons-items/WeaponsItems";
import { WeaponsService } from "../services/WeaponsService";

const weaponsService = new WeaponsService();

const Products: FC = () => {
    return(
        <View style={StylesProducts.body}>
            {/* <Text style={StylesProducts.textRow}>products module</Text> */}
            <WeaponsItems weaponsService={weaponsService}/>
        </View>
    );
};

export default Products;