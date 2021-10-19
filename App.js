import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {

  const [enteredGoal, setenteredGoal] = useState('')
  const [courseGoals, setcourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText)
  }

  const addGoalHandler = () =>{
    setcourseGoals(currentGoals => [...currentGoals,enteredGoal])
  }

  return (
   <View style={styles.screen}>
     <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"  style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
         <Button title="Add" onPress={addGoalHandler} />
     </View>
     <View>
        {courseGoals.map((goal,index) => <View key={index} style={styles.listItem}><Text>{goal}</Text></View>)}
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
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
  },
  listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
    marginVertical:10
  }
});
