import React from "react";
import {StyleSheet, Image, Dimensions, Text, View} from "react-native";
import { normalizeRect } from "react-native/Libraries/StyleSheet/Rect";
import Topo from "../Cesta/components/Topo";
import Texto from '../../components/Texto'; 
import logo from '../../../assets/logo.png';

export default function Cesta() {
    return <>    
        <Topo/>
        <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazrdna}></Image>
                <Texto style={estilos.nomeFazenda}>Fazenda Minas e Minas</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta de verdira diretamente da fazenda para a sua mesa 
                Os meplores produtos, selecionados com muito cuidado e carinho 
            </Texto>
            <Texto style={estilos.preco}>70,00</Texto>
        </View>
    </>
}



const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal :8,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazrdna: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 20,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        olor: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        marginTop: 8
    }
});