import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import Menu from "../components/menu";
import UserBar from "../components/userBar";
import React, { useState } from "react";
export default FightScreen = () => {
  
  let [attack, setAttack] = useState(3);
  let [money, setMoney] = useState(0);

  setInterval(function() {
    if (attack !== 3) {
      setAttack(3);
    }
  }, 1000);
  return (
    <View style={styles.body}>
      <UserBar money={money}/>
      <ImageBackground
        source={require("../../assets/screen.jpg")}
        style={styles.containerScreen}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              setMoney(money=money+1000)
              if (attack === 3) {
                attack = 0;
              }
              setAttack((attack = attack + 1));
            }}
            activeOpacity={1}
          >
            {attack == 3 && (
              <Image
                style={styles.enemy}
                source={require("../../assets/enemy.png")}
              />
            )}
            {attack == 1 && (
              <Image
                style={styles.enemyHitIn}
                source={require("../../assets/enemy.png")}
              />
            )}
            {attack == 0 && (
              <Image
                style={styles.enemyHitOut}
                source={require("../../assets/enemy.png")}
              />
            )}
            <Image
              style={styles.enemyHitOut}
              source={require("../../assets/enemy.png")}
            />
          </TouchableOpacity>
        </View>
        <Menu />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  enemyHitIn: {
    marginTop: 400,
    width: 110,
    height: 110,
    transform: [{ rotate: "20deg" }]
  },
  enemy: {
    marginTop: 400,
    width: 100,
    height: 100
  },
  enemyHitOut: {
    marginTop: 400,
    width: 110,
    height: 110,
    transform: [{ rotate: "-20deg" }]
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "81%"
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
