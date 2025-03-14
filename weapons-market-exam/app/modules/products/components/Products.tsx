import React, { FC, useState, useEffect } from "react";
import { View } from "react-native";
import { StylesProducts } from "../styles/StylesProducts";
import WeaponsItems from "./weapons-items/WeaponsItems";
import { WeaponsService } from "../services/WeaponsService";
import SearchBar from "./SearchBar";
import { ContextSetValueStr, ContextIsModel } from "../context/context";
import WeaponsModelHandle from "./WeaponsModelHandle";
import WithErrorBoundary from "@/app/interface/hocs/WithErrorBoundary";

const weaponsService = new WeaponsService();

const Products: FC = () => {

    const [isHeader, setIsheader] = useState<boolean>(true);
    const [input, setInput] = useState<string>('');
    const [model, setModel] = useState<string>('');

    useEffect(()=>{
        console.log('model', model);
    }, [model]);

    return(
        <View style={StylesProducts.body}>
            <SearchBar _setIsHeader={setIsheader} _input={input} _setInput={setInput}/>
            <ContextSetValueStr.Provider value={setModel}>
                <WithErrorBoundary>
                    <ContextIsModel.Provider value={model !== ''}>
                        <WeaponsItems weaponsService={weaponsService} isHeader={isHeader} input={input}/>
                    </ContextIsModel.Provider>
                </WithErrorBoundary>
                <WithErrorBoundary>
                    {model !== ''? <WeaponsModelHandle weaponsService={weaponsService} model={model}/> : <></>}
                </WithErrorBoundary>
            </ContextSetValueStr.Provider>
        </View>
    );
};

export default Products;