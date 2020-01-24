import React, {useState, useEffect} from 'react';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import Card from './src/screens/IdleClicker';
export default App = () => {
  return (
    <Router>
      <Stack key="root" headerLayoutPreset="center">
        <Scene key="login" initial={true} component={Card} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawer: {
    width: 16,
    height: 16,
    marginLeft: 16,
  },
  notification: {
    width: 20,
    height: 25,
    marginRight: 16,
  },
});
