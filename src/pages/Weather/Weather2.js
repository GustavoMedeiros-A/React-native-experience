import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    Image,
    Dimensions,
    FlatList,
    Alert
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import Icon from "react-native-vector-icons/AntDesign";
  import * as Location from "expo-location";
  
  const openWeatherKey = "8aa2dce58bb0d4f5de22291e0ace72d7";
  let url = `http://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`;
  
  const Weather2 = () => {
    // const navigation = useNavigation();
    const [forecast, setForecast] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    
    
   
    // const { status } =  Location.requestForegroundPermissionsAsync();
    // if (status !== "granted") {
    //     Alert.alert("Permissão negada!"); //permissão negada mostra o alerta
    // }
      
      // Pega a localização atual
    const location =  Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest, maximumAge: 10000
    });
      //Pega o clima da API
    const response =  fetch(
        `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      //Converter para JSON
  
      const data =  response.json();
      console.log(data)
      //Ser der errado emite mais um alerta
      // if (!response.ok) {
      //   Alert.alert("Algo deu errado!");
      // } else {
      //   setForecast(data); //seta a data para estado atual
      // }
      // setRefreshing(false);
      setForecast(data)
    //Hook que roda depois do component estar pronto
  
    // useEffect(() => {
    //   loadForecast();
    // }, []);
  
    // if (!forecast) {
    //   //se o forecast não carregar, mostre o indicador
    //   return (
    //     <SafeAreaView style={styles.loading}>
    //       <ActivityIndicator size="large" />
    //     </SafeAreaView>
    //   );
    // }
  
    const current = forecast.current.weather[0]; //pega o clima atual
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => loadForecast()}
            />
          }
          style={{ marginTop: 50 }}
        >
          {/* <Icon name="doubleleft" size={30} color="black" style={styles.icon} onPress={ ()=> navigation.navigate('Welcome')}/> */}
          <Text style={styles.title}>Clima Atual</Text>
          <Text style={{ alignItems: "center", textAlign: "center" }}>
            Sua localização
          </Text>
          <Image
            style={styles.largeIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${current.icon}@4x.png`,
            }}
          />
          <Text style={styles.currentTemp}>
            {Math.round(forecast.current.tempo)}ºC
          </Text>
  
          <Text style={styles.currentDescription}>{currentdescription}</Text>
  
          <View style={styles.extraInfo}>
            <View style={styles.info}>
              <Image 
                source={require('../../assets/temp.png')}
                style={{width:30, height:40, borderRadius:40/2, marginLeft:50}}
              />
              <Text style={styles.text}>
                  {forecast.current.feels_like}ºC
              </Text>
              <Text style={styles.text}>
                  Sensação de
              </Text>
            </View>
            <View style={styles.info}>
              <Image 
                source={require('../../assets/humidity.png')}
                style={{width:30, height:40, borderRadius:40/2, marginLeft:50}}
              />
              <Text style={styles.text}>
                  {forecast.current.humidity}%
              </Text>
              <Text style={styles.text}>
                  Humidity
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.subtitle}>Hourly Forecast</Text>
          </View>
          <FlatList
          horizontal
          data={forecast.hourly.slice(0,24)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(hour) => {
            const weather = hour.item.weather[0];
            var dt = new Date(hour.item.dt * 1000);
            return (
              <View style={styles.hour}>
                <Text style={{fontWeight: 'bold', color: '#346751'}}>
                  {dt.toLocaleTimeString().replace(/:\d+ /, ' ')}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#346751'}}>
                  {Math.round(hour.item.temp)}ºC
                </Text>
                <Image
                  style={styles.smallIcon}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`
                  }}
                />
                <Text style={{fontWeight: 'bold', color: '#346751'}}>
                  {weather.description}
                </Text>
              </View>
            )
          }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ECDBBA",
    },
    icon: {
      marginTop: 20,
      marginLeft: 20,
    },
    title: {
      textAlign: "center",
      fontSize: 20,
      FontWeight: "bold",
      color: "#C84B31",
    },
    current: {
      flexDirection: "row",
      alignText: "center",
      alignItems: "center",
    },
    largeIcon: {
      width: 300,
      height: 250,
    },
    currentTemp: {
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
    },
    currentDescription: {
      width: "100%",
      textAlign: "center",
      fontWeight: "200",
      fontSize: 24,
      marginBottom: 5,
    },
    info: {
      width: Dimensions.get('screen').width/2.5, 
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 10,
      borderRadius: 15,
      justifyContent: 'center'
    },
    extraInfo: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      padding: 10
    },
    text: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: 24,
      marginVertical: 12,
      marginLeft: 7, 
      color: '#C84B31',
      fontWeight: 'bold'
    },
    hour: {
      padding: 6, 
      alignItems: 'center'
    },
    smallIcon: {
      width: 100,
      height: 100,
    }
  });
  
  export default Weather2;
  