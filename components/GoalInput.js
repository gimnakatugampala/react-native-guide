import React from 'react'
import { StyleSheet, Text, View ,Button,TextInput,Modal} from 'react-native'

export default function GoalInput({addGoalHandler,goalInputHandler,enteredGoal,visible,cancelGoal}) {
    return (
        <Modal animationType="slide" visible={visible}>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"  style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelGoal} />
            </View>
            <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
            </View>
        </View>
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
        width:'80%',
        borderColor:'black' ,
        borderWidth:1,
        padding:10,
        marginBottom:10
      },
      buttonContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'60%'
      },
      button:{
          width:'40%'
      }
})