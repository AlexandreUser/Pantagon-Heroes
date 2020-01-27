import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
export default CompanyScreen = () => {
  setTimeout(function() {
    Actions.replace("loadingScreen");
  }, 15000);
  return (
    <View style={styles.body}>
      <Image
        source={require("../../assets/companyLogo.png")}
        style={styles.logoImage}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  TextButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    fontSize: 20
  },
  button: {
    marginTop: 40,
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
    backgroundColor: "#873400"
  },

  container: {
    alignItems: "center"
  },
  logoImage: {
    marginTop: 200,
    width: 400,
    height: 150,
    marginBottom: 100
  },
  body: {
    backgroundColor: "#3c0080",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});
