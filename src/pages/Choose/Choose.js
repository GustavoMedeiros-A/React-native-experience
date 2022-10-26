import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Choose = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Escolha qual serviço você quer utilizar!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Weather")}
      >
        <Text style={styles.buttonText}>Acessar Weather</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AppTodo")}
      >
        <Text style={styles.buttonText}>Acessar ToDo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        marginLeft: 30,
    },
    button: {
        backgroundColor: '#rgb(32,33,45);',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',
    }
});

export default Choose;
