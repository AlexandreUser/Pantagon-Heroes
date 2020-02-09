import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,Dimensions
} from "react-native";
import Menu from "../components/menu";
import UserBar from "../components/userBar";
import React, { useState } from "react";
export default FightScreen = () => {
  let [money, setMoney] = useState(0);

  return (
    <View style={styles.body}>
      <UserBar money={money} />
      <ImageBackground
        source={require("../../assets/screen.jpg")}
        style={styles.containerScreen}
      >
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={1}>
            <Image
              style={styles.enemy}
              source={require("../../assets/attack.gif")}
            />
          </TouchableOpacity>
        </View>
        <Menu />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  enemy: {
    marginTop:  Math.round(Dimensions.get('window').height/3),
    width: 200,
    height: 330
  },

  container: {
    alignItems: "center",
    width: "100%",
    height: "80%"
  },
  containerScreen: {
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  logoImage: {
    marginTop: 20,
    width: 250,
    height: 150,
    marginBottom: 100
  },
  body: {
    backgroundColor: "#280154",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});
