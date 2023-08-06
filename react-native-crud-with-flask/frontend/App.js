
import { Text, View,FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Insert from './components/Insert';
import Home from './components/Home';
import Details from './components/Details';
import Edit from './components/Edit';

export default function App() {
const Stack =createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Insert" component={Insert}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name="Edit" component={Edit}/>
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}


