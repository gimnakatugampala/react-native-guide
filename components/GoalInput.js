import React from 'react'
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native'

export default function GoalInput({addGoalHandler,goalInputHandler,enteredGoal}) {
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"  style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
         <Button title="Add" onPress={addGoalHandler} />
     </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      input:{
        width:200,
        borderColor:'black' ,
        borderWidth:1,
        padding:10
      }
})
