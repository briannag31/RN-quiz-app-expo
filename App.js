// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";


const App = () =>{
return(
  
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  
)
}

export default App

const styles = StyleSheet.create({
container:{
  paddingTop: 40,
  paddingHorizontal: 16,
  backgroundColor: "#355070"
  
}

})