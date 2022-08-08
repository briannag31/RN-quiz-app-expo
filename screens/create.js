import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const CreateQuestion = () => {

  const [createQues, setCreateQues] = useState("")
  const [incorrectAnswers, setIncorrectAnswers] = useState("")
  const [correctAnswers, setCorrectAnswer] = useState("")

  function create(){

  }
  const [text, setText] = useState('');
return (
    <View style={styles.container}>
      <Text>Firebase crud!</Text> 

      <TextInput placeholder="Question" onChangeText={(createQues) =>{setCreateQuestion(createQues)}} style={styles.textBoxes}></TextInput>
      <TextInput placeholder="Correct Answer" onChangeText={(correctAnswers) =>{setCorrectAnswer(correctAnswers)}} style={styles.textBoxes}></TextInput>
      <TextInput placeholder="Incorrect Answer" style={styles.textBoxes}></TextInput>
      <TextInput placeholder="Incorrect Answer" style={styles.textBoxes}></TextInput>
      <TextInput placeholder="Incorrect Answer" style={styles.textBoxes}></TextInput>


      <TouchableOpacity onPress={create}>
        <Text>Submit Data 
          </Text> 
          
      </TouchableOpacity>      

    </View>
  );


  
}

export default CreateQuestion;

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
      borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
  }   
});