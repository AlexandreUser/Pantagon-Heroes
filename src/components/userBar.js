import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ShadowPropTypesIOS
} from "react-native";
import React, { Component } from "react";
export default UserBar = props => {
  let money = 0;
  if (props.money) {
    money = props.money;
  }
  return (
    <>
      <View style={styles.userBar}>
        <View style={styles.spacement}></View>
        <Text style={styles.moneyText}>{money}</Text>

        <Image
          style={styles.smallImage}
          source={require("../../assets/010-crystal.png")}
        ></Image>
      </View>
      <View style={styles.line}></View>
    </>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#211230",
    width: "100%",
    height: "1%",
    opacity: 0.5
  },
  spacement: {
    width: "75%"
  },
  moneyText: {
    marginRight: 5,
    fontWeight: "bold",
    color: "yellow",
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
