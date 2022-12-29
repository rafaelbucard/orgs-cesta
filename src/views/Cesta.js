import React from "react";
import {StyleSheet, Image, Dimensions, Text, View} from "react-native";
import { normalizeRect } from "react-native/Libraries/StyleSheet/Rect";

import topo from '../../assets/topo.jpg';
import logo from '../../assets/logo.png';

export default function Cesta() {
    return <>    
        <Image source={topo} style={estilos.topo} ></Image>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>
        <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazrdna}></Image>
                <Text style={estilos.nomeFazenda}>Fazenda Minas e Minas</Text>
            </View>
            <Text style={estilos.descricao}>
                Uma cesta de verdira diretamente da fazenda para a sua mesa 
                Os meplores produtos, selecionados com muito cuidado e carinho 
            </Text>
            <Text style={estilos.preco}>70,00</Text>
        </View>
    </>

}

const width = Dimensions.get('screen').width

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width
    },
    titulo: {
       width: "100%" ,
       position: "absolute", 
       textAlign: "center",
       fontSize: 16,
       lineHeight: 26,
       color: "white",
       fontWeight: "bold",
       padding: 16 
    },
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
        marginLeft: 12 
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