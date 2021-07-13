import React, { useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { db } from "../firebase";
const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Adicionar Novo Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  const createChat = async () => {
      await db.collection('chats').add({
          chatName: input,
      }).then(() => {
          navigation.goBack();
      }).catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <Input
        containerStyle={styles.inputContainer}
        placeholder=" Insira um nome para o chat:"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <FontAwesome name="comments-o" size={36} color="#C4C4C4" />
        }
      />
      <Button 
        onPress={createChat} 
        containerStyle={styles.button}
        title="Adicionar Chat"/>
    </View>
  );
};
export default AddChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 285,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2288DC",
  }
});
