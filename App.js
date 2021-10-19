import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredGoal, setenteredGoal] = useState('')
  const [courseGoals, setcourseGoals] = useState([])
  const [isAddModel, setisAddModel] = useState(false)

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText)
  }

  const addGoalHandler = () =>{
    setcourseGoals(currentGoals => [...currentGoals,{id:Math.random().toString(),value:enteredGoal}])
    setisAddModel(false)
    setenteredGoal('')
  }

  const removeGoalHandler = (goalId) => {
      setcourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId)
      })
  }

  const cancelGoal = () => {
    setisAddModel(false)
  }

  return (
   <View style={styles.screen}>
    <Button title="Add New Goal" onPress={() => setisAddModel(true)} /> 
     <GoalInput cancelGoal={cancelGoal} visible={isAddModel} addGoalHandler={addGoalHandler} goalInputHandler={goalInputHandler}  enteredGoal={enteredGoal} />
     
      <FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
});
