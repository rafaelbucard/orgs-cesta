import React from "react";
import topo from '../../../../assets/topo.jpg';
import {StyleSheet, Image, Dimensions, } from "react-native";
import Texto from '../../../components/Texto'; 


export default function Topo() {
   return <>
            <Image source={topo} style={estilos.topo} ></Image>
            <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
         </>
}

const width = Dimensions.get('screen').width;

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
});