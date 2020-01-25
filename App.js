import React, { useState, useEffect } from "react";
import { Router, Scene, Stack, Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";
import Initial from "./src/screens/main";
import cardChoose from "./src/screens/cardChoose";
import deckChoose from "./src/screens/deckChoose";
import CardDetail from "./src/screens/cardDetails";
import FightScreen from "./src/screens/fightScreen"
export default App = () => {
  return (
    <Router>
      <Stack key="root" headerLayoutPreset="center">
        <Scene
          key="login"
          initial={true}
          component={Initial}
          hideNavBar={true}
        />
        <Scene
          key="deckScreen"
          direction="horizontal"
          initial={false}
          component={deckChoose}
          hideNavBar={true}
        />
        <Scene
          key="cardScreen"
          direction="horizontal"
          initial={false}
          component={cardChoose}
          hideNavBar={true}
        />
        <Scene
          key="detailScreen"
          direction="horizontal"
          initial={false}
          component={CardDetail}
          hideNavBar={true}
        />
        <Scene
          key="fightScreen"
          direction="horizontal"
          initial={false}
          component={FightScreen}
          hideNavBar={true}
      />
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: 16,
    fontWeight: "bold"
  },
  drawer: {
    width: 16,
    height: 16,
    marginLeft: 16
  },
  notification: {
    width: 20,
    height: 25,
    marginRight: 16
  }
});
