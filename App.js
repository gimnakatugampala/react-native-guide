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

  return (
   <View style={styles.screen}>

     <GoalInput addGoalHandler={addGoalHandler} goalInputHandler={goalInputHandler}  enteredGoal={enteredGoal} />
     
      <FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
});
