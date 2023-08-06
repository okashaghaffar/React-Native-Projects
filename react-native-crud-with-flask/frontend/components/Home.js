import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View,FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home({navigation}) {
  const [data,setData] = useState([])
  const [loading,setLoading]=useState(true)
  const LoadData=()=>{
    
    fetch('http://172.16.57.49:3000/',{
      method:'GET'
    })
    .then(res=>res.json())
    .then(user=>setData(user))
    setLoading(false)
  }

  useEffect(()=>{LoadData();
  },[])

const Clicked=(data)=>{
    navigation.navigate('Details',{data:data})
} 
 
  const renderData=(item)=>{
    return <Card className="m-10 p-10 flex-col items-center">
      <Text onPress={()=>Clicked(item)}>Name : {item.name}</Text>
      <Text>Semester : {item.semester}</Text>
    </Card>
  }
  return (
    <View className="flex-1  items-center justify-center">
      <FlatList
      data={data}
      renderItem={({item})=>{
        return renderData(item)
      }}
      onRefresh={()=>LoadData()}
      refreshing={loading}
      keyExtractor={item=>`${item.id}`}/>
      
      <TouchableOpacity onPress={()=>navigation.navigate('Insert')}>
        <Text className="bg-slate-400 rounded-2xl p-6 m-6 text-white font-semibold">ADD</Text>
      </TouchableOpacity>
    </View>
  );
}
