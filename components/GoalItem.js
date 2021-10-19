import { StyleSheet, Text, TouchableOpacity, View ,TouchableHighlight ,TouchableNativeFeedback } from 'react-native'
import React from 'react';

export default function GoalItem({title,onDelete,id}) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this,id)}>
        <View style={styles.listItem}><Text>{title}</Text></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginVertical:10
      }
})
