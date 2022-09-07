import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';

export default function Butao(props){
    return (
        <View style={styles.container}><TouchableOpacity style={styles.buton} onPress={()=>props.logCalc(props.numeros)}><Text style={styles.num_cont}>{props.numeros}</Text></TouchableOpacity></View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
    },
    buton:{
        width:80,
        height:80,
        backgroundColor:'#adbcc9',
        padding:10,
        margin:10,
        marginTop:10,
        borderRadius:40,
    },

    num_cont: {
        textAlign:'center',
        justifyContent:'center',
        fontSize:42,
        color:'#121426',
    }
})