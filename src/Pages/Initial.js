import React from 'react'
import { Image, StyleSheet, Text, View,  } from 'react-native'
import MyButton from '../Componentes/Button'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function Initial() {
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
        <Text style={styles.logo}>AngaBox</Text>
        <Text style={styles.text1}>Share your opinions, discover recommendations</Text>
        <Text style={styles.text2}>and dive into the best stories of cinema!</Text>
       <MyButton
        title = "Login"
       />
       <MyButton
       title = "Register"
       />
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        
    },
    image: {
        marginTop: 130,
        width: 350,
        height: 350
    },
    logo:{
        marginTop: 10,
        fontSize: 46,
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 25,
        color: "black"
    },
    text1:{
      color: 'gray',
      marginTop: 20,
      fontFamily: 'Montserrat_400Regular',
    },
    text2:{
      color: 'gray',
      marginLeft: 5,
      fontFamily: 'Montserrat_400Regular',
    },
    containerText: {
      justifyContent: "flex-start",
      flexDirection: "row",
    }
})