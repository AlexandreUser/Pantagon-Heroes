import {
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import React, { Component, useState } from "react";
import Card from "../components/CardInsideHolder";
export default Holder = props => {

  const MyId = props.id;
  const [isActive, setActive] = useState(props.active);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(!isActive);
        props.onclicked(props.id,isActive);

      }}
    >
      <View style={styles.cardSlot}>
        <View style={styles.internSlot}>
          {isActive && (
            <>
              <Card style={styles.cardgame} id={MyId} />
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardgame: {
    marginTop: 10,
    width: 70,
    height: 110
  },
  internSlot: {
    width: 60,
    height: 80,
    backgroundColor: "#280154"
  },
  cardSlot: {
    margin: 5,
    padding: 10,
    width: 80,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#4b065c"
  }
});
