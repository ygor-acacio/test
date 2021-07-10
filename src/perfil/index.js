import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import { database }  from '../config/firebase';
import logoPolifig from '../image/logo.png';
import { FontAwesome } from '@expo/vector-icons';
import * as S from './styles'
 
export const Perfil = () => {
const [ user, setUser ] = useState([]);
const [student, setStudent] = useState('');

const Pesquisar = useCallback(()=>{
  database.collection(student). onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push(doc.data())
        })
        setUser(list);
      })
},[student])

  return(
    <S.Container>
      <View>
        <S.Logo source={logoPolifig}/>
      </View>
      <S.Pesquisa>
        <S.TextInput 
          placeholder='Qual é o seu nome ? '
          value={student}
          onChangeText={Text => setStudent(Text)}
        ></S.TextInput>
        <TouchableOpacity onPress={Pesquisar}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </S.Pesquisa>
      {user.map((user) => {
        return (
          <>
            <Text>{user.name}</Text>
            <Text>{user.level}</Text>
            <Text>{user.finish}</Text>
            <Text>{user.código}</Text>
            <Text>{user.institute}</Text>
            <Text>{user.ponctuation}</Text>
            <Text>{user.timeStudy}</Text>
            <Text>{user.timeClass}</Text>
            <Text>{user.start}</Text>
            <Text>{user.presence}</Text>
            <Text>{user.photo}</Text>
            <Text>{user.Metas}</Text>
            <Text>{user.homework}</Text>
          </>
        )
      })}
    </S.Container>
  )
} 
