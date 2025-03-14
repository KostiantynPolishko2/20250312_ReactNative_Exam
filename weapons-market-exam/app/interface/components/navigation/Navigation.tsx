import React, { FC } from "react";
import { View, Button } from "react-native";
import { useRouter } from "expo-router";
import { StylesNav } from "@/app/interface/styles/StylesNav";

const Navigation: FC = () => {

    const router = useRouter();

    return(
        <View style={StylesNav.body}>
            <Button title="products" onPress={() => router.push('/modules/products/components/Products')} color={'#68abd8'}/>
            <Button title="orders" onPress={() => router.push('/modules/order/components/Orders')} color={'#DA2C38'}/>
            <Button title="admin" onPress={() => router.push('/modules/admin/components/Admin')} color={'#E6C150'}/>
            <Button title="auth" onPress={() => router.push('/modules/auth/components/Auth')} color={'#34C684'}/>
        </View>
    );
};

export default Navigation;