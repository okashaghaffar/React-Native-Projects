import React from 'react'
import { View ,ScrollView,Text} from 'react-native'
import { TextInput,Button } from 'react-native-paper'

export default function Details(props) {
    const data=props.route.params.data;
    const DeleteData=()=>{
        fetch(`http://172.16.57.49:3000/delete/${data.id}`,{
        method:'DELETE',
    headers:{'Content-Type':'application/json'}})
    .then(data=>{
        props.navigation.navigate("Home")
    })
    }
  return (
    <View className="flex-1 justify-center items-center">
        <Text>{data.name}</Text>
        <Text>{data.semester}</Text>
        <Text>{data.id}</Text>
        <Button
        onPress={()=>props.navigation.navigate("Edit",{data:data})}
        icon='update'>
        Edit
        </Button>

        <Button
        onPress={()=>DeleteData(data)}
        icon='delete'>
        Delete</Button>

    </View>
  )
}
