import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import React, { Component } from "react";
export default UserBar = () => {
  return (
    <View style={styles.userBar}>
      <View style={styles.spacement}></View>
      <Text style={styles.moneyText}>1000</Text>
      <Image
        style={styles.smallImage}
        source={require("../../assets/010-crystal.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  spacement: {
    width: "75%"
  },
  moneyText: {
    marginRight: 5,
    fontWeight: "bold",
    color: "white",
    marginTop: 14,
    fontSize: 15
  },
  smallImage: {
    marginTop: 10,
    width: 30,
    height: 30
  },
  userBar: {
    flexDirection: "row",
    width: "100%",
    height: "7%",
    backgroundColor: "#3c0080"
  }
});
