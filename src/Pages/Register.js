import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, Alert, StyleSheet } from "react-native";
import TextField from "../Componentes/TextField";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import MyButton from "../Componentes/Button";

export default function Register() { 
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://10.92.198.32:8080/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        Alert.alert("Success", "Registration completed successfully!");
        navigation.navigate("Login"); 
      } else {
        Alert.alert("Error", "Failed to register. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to register. Please try again.");
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../Assets/Images/logoImage.png")}
      />
      <Text style={styles.logo}>SIGN UP</Text>
      <TextField placeholder="Name" value={name} onChangeText={setName} />
      <TextField placeholder="Email" value={email} onChangeText={setEmail} />
      <TextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton
        title="Register"
        onPress={handleRegister} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    marginTop: 60,
    width: 300,
    height: 300,
  },
  logo: {
    marginTop: 10,
    fontSize: 26,
    marginBottom: 25,
    color: "black",
    fontFamily: "Montserrat_400Regular",
  },
  question: {
    color: "gray",
    marginTop: 20,
    fontFamily: "Montserrat_400Regular",
  },
  login: {
    marginTop: 20,
    marginLeft: 5,
    color: "#9400D3",
    fontFamily: "Montserrat_400Regular",
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
