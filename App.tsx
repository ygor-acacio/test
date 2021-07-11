import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';


const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const App: React. FC = () => {
  const [items,setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      
     setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {

    return (
    <TouchableOpacity style={{marginRight: 10, marginTop: 17}}
    onPress={() => Alert.alert(item.name)}> 
      <Card>
        <Card.Content>
        <View
        style ={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alingItems: 'center',
        }}>

          <Text>{item.name}</Text>
          <Avatar.Text label="N"/>
        </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    );

  };

  return ( <View style={{flex: 1}}>
     <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-07-11'}
        renderItem={renderItem}
       />
        
       
  </View>);

};

export default  App
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
