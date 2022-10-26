
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Animatable.Image 
            animation="flipInY"
            source={require('../../assets/ring.png')}
            style={{width: '80%'}}
            risizeMode='contain'
            />
        </View>
        <Animatable.View delay={600} animation="fadeInUp"style={styles.containerForm}>
            <Text style={styles.title}>Aplicativo com estilo Tolkien para deixar o sua dia a dia mais divertido!</Text>
            <Text style={styles.text}>Acesse para começar a explorar esse mundo mágico!</Text>

            {/* TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques. Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade. */}
            <TouchableOpacity 
            style={styles.button}
            onPress={ ()=> navigation.navigate('Choose')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#rgb(32,33,45);",
    },
    containerLogo:{
        flex:2,
        backgroundColor:"#rgb(32,33,45);",
        alignItems: "center",
        justifyContent: "center",
    },
    containerForm:{
        flex:1.3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: "#a1a1a1"
    },
    button: {
        position: "absolute",
        backgroundColor: '#rgb(32,33,45);',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: "25%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',
    }
})

export default Welcome