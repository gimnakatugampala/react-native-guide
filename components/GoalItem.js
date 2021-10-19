import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function GoalItem({title}) {
    return (
        <View style={styles.listItem}><Text>{title}</Text></View>
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
