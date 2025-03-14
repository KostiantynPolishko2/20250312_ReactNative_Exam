import React, { FC } from "react";
import { View, TextInput } from "react-native";
import FeatherIcon from '@expo/vector-icons/Feather';
import { SearchBarStyles as styles } from "@/app/modules/products/styles/StylesProducts";

type SearchBarProps = {
    _input: string,
    _setIsHeader: (flag: boolean)=>void,
    _setInput: (value: string)=>void,
}

const SearchBar: FC<SearchBarProps> = (props) => {

    const handleOnblur = () => {
      props._setIsHeader(true);
      props._setInput('');
    }

    return(
        <View style={styles.searchWrapper}>
            <View style={styles.search}>
                <View style={styles.searchIcon}>
                <FeatherIcon
                    color="#848484"
                    name="search"
                    size={17} />
                </View>
                <TextInput
                    textContentType="none"
                    autoCorrect={true}
                    autoCapitalize="sentences"
                    keyboardType="default"
                    inputMode="text"
                    clearButtonMode="while-editing"
                    onChangeText={val => props._setInput(val)}
                    onFocus={()=>{props._setIsHeader(false)}}
                    onBlur={handleOnblur}
                    placeholder="Start typing.."
                    placeholderTextColor="#848484"
                    returnKeyType="done"
                    style={styles.searchControl}
                    value={props._input} 
                />
            </View>
        </View>
    );
}

export default SearchBar;