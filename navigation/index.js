// import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Results from '../screens/results';
import CreateQuestion from "../screens/create";
import Choice from "../screens/choice";
import UserFormScreen from "../screens/userForm";
import SignUp from "../screens/signup";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false }} />
      <Stack.Screen name="Create" component={CreateQuestion} options={{headerShown: false }}  />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false }}  />
      <Stack.Screen name="Choice" component={Choice} options={{headerShown: false }}  />
      <Stack.Screen name="UserForm" component={UserFormScreen} options={{headerShown: false }}  />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false }}  />
      <Stack.Screen name="Results" component={Results} options={{headerShown: false }}  />
    </Stack.Navigator>
  );
}

export default MyStack