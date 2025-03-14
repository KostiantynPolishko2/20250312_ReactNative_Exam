import React, { FC, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { StylesProducts } from "../styles/StylesProducts";
import WeaponsItems from "./weapons-items/WeaponsItems";
import { WeaponsService } from "../services/WeaponsService";
import SearchBar from "./SearchBar";

const weaponsService = new WeaponsService();

const Products: FC = () => {

    const [isHeader, setIsheader] = useState<boolean>(true);
    const [input, setInput] = useState<string>('');
    
    // useEffect(()=>{
    //     console.log('input', input);
    // }, [input]);

    return(
        <View style={StylesProducts.body}>
            <SearchBar _setIsHeader={setIsheader} _input={input} _setInput={setInput}/>
            <WeaponsItems weaponsService={weaponsService} isHeader={isHeader} input={input}/>
            <View>
                <Text>weapons model</Text>
            </View>
        </View>
    );
};

export default Products;