import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function AppTodo() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ])

  {/* Recebemos a KEY e filtra o item que tem KEY fora do array q tá sendo criado*/}
  {/* Pega o todo e retorna um novo array sem o todo que foi clicado */}
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

    {/**Função para adicionar o todo */}
    {/**Pega tudo do array criado antes com ...prevTodos, mas antes passa o objeto que vamos passar. O NOVO ESTADO VAI SER ESSE NOVO ARRAY*/}
    const submitHandler = (text) => {
      
      if(text.length > 3) {
        setTodos((prevTodos) => {
          return [
            {text: text, key: Math.random().toString()},
            ...prevTodos
          ]
        })
      } else {
        Alert.alert('Ops!', 'ToDo precisam ter mais de 3 letras!', [
          {text: "Entendido!", onPress: () => console.log('alerta fechado')}
        ])
      }
      {/**Um alerta para avisar quando o ToDo tem menos de 3 letras, pedindo por usuário fechar */}

  }
    {/**Componente para fechar o keyBoard quando clicar na tela */}
  return (

    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
      console.log("teclado fechado")
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            {/* Flat list passa pelo TODO, por cada objeto e "imprime" ele na tela */}
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }

});
