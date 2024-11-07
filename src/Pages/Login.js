import React from 'react'
import { Image, StyleSheet, Text, View,  } from 'react-native'
import TextField from '../Componentes/TextField'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import MyButton from '../Componentes/Button';

export default function Login() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
            source={require('../Assets/Images/logoImage.png')}
        />
        <Text style={styles.logo}>SIGN IN</Text>
       <TextField
        placeholder = 'Name'
       />
       <TextField
        placeholder = "Email"
       />
       <TextField
        placeholder = "Password"
       />
       <MyButton
        title =  'Login'
       />
       <View style={styles.containerText}>
       <Text style={styles.question}>Don't have an account?</Text>
       <Text style={styles.login}>Sign up</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        
    },
    image: {
        marginTop: 60,
        width: 300,
        height: 300
    },
    logo:{
        marginTop: 10,
        fontSize: 26,
        marginBottom: 25,
        color: 'black',
        fontFamily: 'Montserrat_400Regular'
    },
    question:{
      color: 'gray',
      marginTop: 20,
      fontFamily: 'Montserrat_400Regular'
    },
    login:{
      marginTop: 20,
      marginLeft: 5,
      color: "#9400D3",
      fontFamily: 'Montserrat_400Regular'

    },
    containerText: {
      justifyContent: "flex-start",
      flexDirection: "row",
    }
})
