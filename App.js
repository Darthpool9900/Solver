import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import Butao from './Butao';

export default function App() {
  const[firstNumber,setFirstNumber] =useState(0);
  const[secondNumber,setSecondNumber] =useState(0);
  const [sinal,setSinal] =useState("");
  const[stringCalc,setStringCalc] = useState("");
  var numeros = [];
  for(var i = 0;i<10;i++){
    numeros.push(i);
  }
  function logCalc(n){
    if(sinal==""){
      setFirstNumber(parseInt(firstNumber.toString()+n.toString()));
      setStringCalc(parseInt(firstNumber.toString()+n.toString()))
    }
    if((n=="÷"||n=="x"||n=="+"||n=="-")&&secondNumber==0){ 
      setStringCalc(firstNumber.toString() + n);
      setSinal(n);
    }
    if(sinal!=""){
      setSecondNumber(parseInt(secondNumber.toString()+n.toString()));
      setStringCalc(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
    }
    if(n=="="){
      let result;
      if(sinal=="+"){
        result = firstNumber+secondNumber;
      }else if(sinal=="-"){
        result = firstNumber-secondNumber;
      }else if(sinal=="÷"){
        result = firstNumber/secondNumber;
      }else if(sinal=="x"){
        result = firstNumber*secondNumber;
      }
      setStringCalc(result);
      setSinal("");
      setFirstNumber(result);
      setSecondNumber(0);
    }
  }

  function limpar(){
    setStringCalc("0");
      setSinal("");
      setFirstNumber(0);
      setSecondNumber(0);
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.num}>{stringCalc}</Text>
      </View>
      <View style={styles.cont}>
        <TouchableOpacity onPress={()=>logCalc('+')}style={styles.signal}><Text style={styles.s_text}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logCalc('-')} style={styles.signal}><Text style={styles.s_text}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logCalc('x')} style={styles.signal}><Text style={styles.s_text}>x</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logCalc('÷')} style={styles.signal}><Text style={styles.s_text}>÷</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>logCalc('=')} style={styles.signal}><Text style={styles.s_text}>=</Text></TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',flexWrap:'wrap',width:'85%',justifyContent:'center',alignItems:'center',margin:40,marginTop:10}}>
        {
          numeros.map(function(e){
            return (<Butao numeros = {e} logCalc={logCalc}></Butao>)
          })
        }
         <TouchableOpacity style={styles.buton} onPress={()=>limpar()}><Text style={styles.num_cont}>C</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#1e1e1f',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  top:{
    marginTop:'2%',
    padding:10,
    height:120,
    borderColor:'#c0c0c4',
    borderWidth:2,
    fontSize:24,
    borderRadius:20,
    width:'90%'
  },
  num:{
    position:'absolute',
    fontSize:32,
    color:'#c0c0c4',
    right:4,
    bottom:4,
    paddingRight:10,
  },
  cont:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap'
  },
  signal:{
    width:50,
    height:50,
    backgroundColor:'#adbcc9',
    padding:5,
    margin:10,
    marginTop:40,
    borderRadius:40,
  },
  s_text:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:24,
    color:'#121426',
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

});
