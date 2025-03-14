import React, { FC, useState, useEffect } from "react";
import { View } from "react-native";
import { StylesProducts } from "../styles/StylesProducts";
import WeaponsItems from "./weapons-items/WeaponsItems";
import { WeaponsService } from "../services/WeaponsService";
import SearchBar from "./SearchBar";
import { ContextSetValueStr } from "../context/context";
import WeaponsModel from "./WeaponsModel";
import WithErrorBoundary from "@/app/interface/hocs/WithErrorBoundary";

const weaponsService = new WeaponsService();

const Products: FC = () => {

    const [isHeader, setIsheader] = useState<boolean>(true);
    const [input, setInput] = useState<string>('');
    const [weaponsModel, setWeaponsModel] = useState<string>('');
    
    useEffect(()=>{
        console.log('weapons model', weaponsModel);
    }, [weaponsModel]);

    return(
        <View style={StylesProducts.body}>
            <SearchBar _setIsHeader={setIsheader} _input={input} _setInput={setInput}/>
            <WithErrorBoundary>
                <ContextSetValueStr.Provider value={setWeaponsModel}>
                    <WeaponsItems weaponsService={weaponsService} isHeader={isHeader} input={input}/>
                </ContextSetValueStr.Provider>
            </WithErrorBoundary>
            <WithErrorBoundary>
                {weaponsModel !== ''? <WeaponsModel weaponsService={weaponsService} model={weaponsModel}/> : <></>}
            </WithErrorBoundary>
        </View>
    );
};

export default Products;