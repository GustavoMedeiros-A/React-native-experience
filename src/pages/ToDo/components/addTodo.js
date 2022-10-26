import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    {/**Passa o novo falor por text */}
    const changeHandler = (val) => {
        setText(val)
    }
    const navigation = useNavigation()


    return (
        <View>
            <Icon name="doubleleft" size={30} color="black" style={styles.icon} onPress={ ()=> navigation.navigate('Welcome')}/>
            <TextInput 
            style={styles.input}
            placeholder = 'new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='#857a17'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8, 
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#857a17' 

    },
    icon:{
        marginBotton: 15,
    }
})