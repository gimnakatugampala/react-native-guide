import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredGoal, setenteredGoal] = useState('')
  const [courseGoals, setcourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText)
  }

  const addGoalHandler = () =>{
    setcourseGoals(currentGoals => [...currentGoals,{id:Math.random().toString(),value:enteredGoal}])
  }

  const removeGoalHandler = (goalId) => {
      setcourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId)
      })
  }

  return (
   <View style={styles.screen}>

     <GoalInput addGoalHandler={addGoalHandler} goalInputHandler={goalInputHandler}  enteredGoal={enteredGoal} />
     
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
