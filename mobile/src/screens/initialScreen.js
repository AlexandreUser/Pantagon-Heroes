import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import Menu from "../components/menu";
import UserBar from "../components/userBar";

import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
export default initialScreen = () => {
  return (
    <View style={styles.body}>
      <UserBar />
      <View style={styles.container}>
        <View style={styles.greetings}>
          <Text style={styles.title}> Bem-vindo aos campos de batalha</Text>
        </View>
        <View style={styles.descriptionText}>
          <Text style={styles.descriptionTextStyle}>
            Ola Guerreiro, muito se falou sobre a profecia do lendario
            invocador, estamos muito animados com sua presença nos campos de
            Pantagon. Mas antes de começar, preciso saber seu nome.
          </Text>
          <TextInput style={styles.input} onChangeText={text => {}} />
        </View>
        <TouchableOpacity onPress={() => {Actions.fightScreen()}}>
          <View style={styles.buyButton}>
            <Text style={styles.buttonTitle}> Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  buyButton: {
    marginBottom: 20,
    alignItems: "center",
    width: 150,
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    shadowOffset: { width: 20, height: 20 },
    backgroundColor: "#3c0080"
  },
  input: {
    marginTop: 20,
    width: 200,
    height: 40,
    textAlign: "center",
    color: "white",
    borderColor: "gray",
    borderWidth: 1
  },
  descriptionTextStyle: {
    color: "#c2c2c2",
    fontSize: 15,
    textAlign: "justify"
  },
  descriptionText: {
    margin: 20,
    alignItems: "center"
  },
  title: {
    color: "#c2c2c2",
    fontSize: 25,
    width: 300,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonTitle: {
      marginTop:10,
    color: "#c2c2c2",
    fontSize: 20,
    width: 300,
    fontWeight: "bold",
    textAlign: "center"
  },
  greetings: {
    marginTop: 30,
    margin: 20
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "81%"
  },
  body: {
    backgroundColor: "#280154",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});
