import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,ImageBackground,
    Image,TouchableOpacity,
  } from 'react-native';
  import React, {Component} from 'react';
  import {Actions} from "react-native-router-flux"
  export default Menu = () => {
    return (
      <>
      <View style={styles.line}></View>
      <View style={styles.container}>
      <TouchableOpacity onPress={() =>{Actions.replace("cardScreen")}} style={styles.optionContainer}>
        <Image
          style={styles.iconHome}
          source={require('../../assets/067-treasure-1.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{Actions.replace("deckScreen")}} style={styles.optionContainer}>
        <Image
          style={styles.iconGift}
          source={require('../../assets/002-adventure.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Actions.replace("fightScreen")}} style={styles.optionContainer}>
        <Image
          style={styles.iconSearch}
          source={require('../../assets/006-character.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.optionContainer} >
        <Image
          style={styles.iconUser}
          source={require('../../assets/009-crossing-swords.png')}></Image>
      </TouchableOpacity>
    </View>
    </>
    );
  };
  
  const styles = StyleSheet.create({
    line:{
      backgroundColor: '#211230',
      width:"100%",
      height:"1%",
      opacity:1,
    },
    container: {

      backgroundColor: '#3c0080',
      width: '100%',
      height: 71,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    optionContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleActive: {
      color: '#E8704D',
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 3,
    },
    title: {
      color:"white",
      fontSize: 12,
      marginTop: 3,
    },
    iconHome: {
      height:50,
      width: 50,
    },
    iconGift: {
      height: 50,
      width: 50,
    },
    iconSearch: {
      height: 50,
      width: 50,
    },
    iconUser: {
      height: 50,
      width: 50,
    },
  });
  

  