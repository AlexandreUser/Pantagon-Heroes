import React, { useState, useEffect } from "react";
import {
  Router,
  Scene,
  Stack,
  Actions,
  ActionConst
} from "react-native-router-flux";
import { StackViewStyleInterpolator } from "react-navigation-stack";

import { StyleSheet } from "react-native";
import Initial from "./src/screens/main";
import cardChoose from "./src/screens/cardScreen";
import deckChoose from "./src/screens/deckScreen";
import CardDetail from "./src/screens/cardDetails";
import FightScreen from "./src/screens/fightScreen";
import initialScreen from "./src/screens/initialScreen"
export default App = () => {
  return (
    <Router>
      <Stack
        key="root"
        headerLayoutPreset="center"
        transitionConfig={() => ({
          screenInterpolator: StackViewStyleInterpolator.forHorizontal
        })}
      >
        <Scene
          key="login"
          initial={false}
          component={Initial}
          hideNavBar={true}
        />
        <Scene
          tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
          key="deckScreen"
          direction="horizontal"
          initial={false}
          component={deckChoose}
          hideNavBar={true}
        />
        <Scene
          tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
          key="cardScreen"
          direction="horizontal"
          initial={false}
          component={cardChoose}
          hideNavBar={true}
        />
        <Scene
          tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
          key="detailScreen"
          direction="horizontal"
          initial={false}
          component={CardDetail}
          hideNavBar={true}
        />
        <Scene
          tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
          key="fightScreen"
          direction="horizontal"
          initial={false}
          component={FightScreen}
          hideNavBar={true}
        />
        <Scene
          key="initialScreen"
          direction="horizontal"
          initial={true}
          component={initialScreen}
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
