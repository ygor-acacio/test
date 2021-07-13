import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import { auth } from "../firebase";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Login Rede PoliFig",
    });
  }, [navigation]);
  const signin = async () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/polifigicon.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{
        fontSize: 20,
        padding: 10,
        marginTop: 10,
      }}>
        Bem vindo(a) à Rede PoliFig!
      </Text>
      <View style={styles.inputContainer}>
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
      </View>
      <Button 
        onPress={signin} 
        containerStyle={styles.button} 
        title="Entrar"
      />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        title="Cadastrar-se"
        type="outline"
      />
      <Text style={{
        color: "#C4C4C4",
        fontSize: 12,
        padding: 15,
      }}>
        ©2021 Grupo 1 - PCS3100
      </Text>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    marginTop: 10,
    width: 300,
  },
  button: {
    width: 285,
    marginBottom: 15,
  },
});
