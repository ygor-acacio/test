import React, { useState, useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";
import * as ImagePicker from 'expo-image-picker';
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Cadastro Rede PoliFig",
    });
  }, [navigation]);
  const register = async () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: image || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        });
        console.log(image);
      })
      .catch((error) => alert(error.message));
  };
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/polifigicon.png")}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />
      <Text style={{
        fontSize: 20,
        padding: 20,
      }}>
        Insira seus dados:
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Nome Completo:"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email USP:"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha:"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.selectImage} onPress={selectImage}>
          <Text style={{ 
            fontSize: 16,
            color: "#2288DC", 
            alignSelf: "center" 
          }}>
            Escolha uma foto de perfil (opcional)
          </Text>
        </TouchableOpacity>
      </View>
      <Button containerStyle={styles.button} title="Cadastrar-se" onPress={register}/>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
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
    borderColor: "#2288DC",
  },
  selectImage: {
    width: 285,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    color: "white",
    backgroundColor: "transparent",
    borderColor: "#2288DC"
  }
});
