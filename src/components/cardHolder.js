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
import { Actions } from "react-native-router-flux";
  export default Card = (props) => {
    return (
        <TouchableOpacity onPress={Actions.detailScreen}>
            <Image
            style={props.style}
            source={require("../../assets/moldura.png")}
          ></Image>
        </TouchableOpacity>
        
         
    );
  };
  
  const styles = StyleSheet.create({
  
  });
  