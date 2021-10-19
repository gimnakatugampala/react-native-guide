import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
   <View style={{padding:50,flexDirection:'row',width:'80%',height:300,justifyContent:'space-around',alignItems:'stretch'}}>
     <View style={{backgroundColor:'red',justifyContent:'center',flex:1,alignItems:'center'}}>
       <Text>1</Text>
     </View>
     <View style={{backgroundColor:'blue',justifyContent:'center',flex:2,alignItems:'center'}}>
       <Text>2</Text>
     </View>
     <View style={{backgroundColor:'green',justifyContent:'center',flex:3,alignItems:'center'}}>
       <Text>3</Text>
     </View>
   
   </View>
  );
}

const styles = StyleSheet.create({

});
