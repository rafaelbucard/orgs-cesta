import React from "react";
import {StyleSheet, Image, View} from "react-native";
import { normalizeRect } from "react-native/Libraries/StyleSheet/Rect";

import Topo from "../Cesta/components/Topo";
import Detalhes from "./components/Detalhes";


export default function Cesta() {
    return <>    
        <Topo/>
        <View style={estilos.cesta}>
            <Detalhes />
        </View>
    </>
}



const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal :8,
    }
});