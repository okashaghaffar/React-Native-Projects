import { useState } from 'react'
import React  from 'react'
import { Text, View } from 'react-native'
import { TextInput,Button } from 'react-native-paper'
export default function Insert({navigation}) {
    const[name,setName]=useState("")
    const[semester,setSemester]=useState("")
    const InsertData = ()=>{
        fetch('http://172.16.57.49:3000//post',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:name,semester:semester})
        }).then(res=>res.json())
        .then(data=>{
            navigation.navigate('Home')
        }).catch(err=>console.log(err))
    }

  return (
    <View>
        <TextInput className="px-14"
        placeholder='Enter Name'
        label="Name"
        mode='outlined'
        value={name}
        onChangeText={text=>setName(text)}
        />
         <TextInput className="px-14"
        placeholder='Enter Semester'
        label="Semester"
        mode='outlined'
        value={semester}
        onChangeText={text=>setSemester(text)}
        />
        <Button className=""
        icon='pencil'
        onPress={()=>InsertData()}> </Button>
    </View>
  )
}
