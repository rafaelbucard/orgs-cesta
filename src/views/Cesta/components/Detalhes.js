import React from "react";
import { ViewBase, Image, StyleSheet, View } from "react-native";

import Texto from '../../../components/Texto';
import logo from '../../../../assets/logo.png';


export default function Detalhes() {
    return <>
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
    </>
}

const estilos =StyleSheet.create({

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

})