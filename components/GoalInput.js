import React from 'react'
import { StyleSheet, Text, View ,Button,TextInput,Modal} from 'react-native'

export default function GoalInput({addGoalHandler,goalInputHandler,enteredGoal,visible,cancelGoal}) {
    return (
        <Modal animationType="slide" visible={visible}>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"  style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Cancel" color="red" onPress={cancelGoal} />
         <Button title="Add" onPress={addGoalHandler} />
         </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      input:{
        width:200,
        borderColor:'black' ,
        borderWidth:1,
        padding:10,
        marginBottom:10
      }
})
