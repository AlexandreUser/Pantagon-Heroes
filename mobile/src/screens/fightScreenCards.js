import { StyleSheet, View } from "react-native";
import Menu from "../components/menu";
import UserBar from "../components/userBar";
import React, { Component, useState } from "react";
import Card from "../components/CardNoInteractive";
import Holder from "../components/cardPlacement";
import HolderReverse from "../components/cardPlacementReverse";
export default fightSceneScreen = () => {
  const [cardId, setCardId] = useState(0);
  function handleTouch(id) {
    if (id !== 0) {
      console.log(id);
      setCardId(id);
    }
  }
  return (
    <View style={styles.body}>
      <UserBar />

      <View style={styles.container}>
        <View style={styles.enemySide}>
          <View style={styles.deckHolderReverse}>
            <Card
              id={1}
              clicked={false}
              onclicked={id => {}}
              style={styles.cardgame}
            />
            <Card
              id={2}
              clicked={false}
              onclicked={id => {}}
              style={styles.cardgame}
            />
            <Card
              id={3}
              clicked={false}
              onclicked={id => {}}
              style={styles.cardgame}
            />
            <Card
              id={4}
              clicked={false}
              onclicked={id => {}}
              style={styles.cardgame}
            />
             <Card
              id={4}
              clicked={false}
              onclicked={id => {}}
              style={styles.cardgame}
            />
            
          </View>
          <View style={styles.cardPlacementReverse}>
            <HolderReverse active={false} id={0} />
            <HolderReverse active={false} id={0} />
            <HolderReverse active={false} id={0} />
            <HolderReverse active={false} id={0} />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.playerSide}>
          <View style={styles.cardPlacement}>
            <Holder
              active={false}
              id={0}
              onclicked={() => {
                handleTouch(cardId);
              }}
            />
            <Holder
              active={false}
              id={1}
              onclicked={() => {
                handleTouch(cardId);
              }}
            />
            <Holder
              active={false}
              id={2}
              onclicked={() => {
                handleTouch(cardId);
              }}
            />
            <Holder
              active={false}
              id={3}
              onclicked={() => {
                handleTouch(cardId);
              }}
            />
          </View>
          <View style={styles.deckHolder}>
            <Card
              id={1}
              clicked={false}
              onclicked={id => {
                handleTouch(id);
              }}
              style={styles.cardgame}
            />
            <Card
              id={2}
              clicked={false}
              onclicked={id => {
                handleTouch(id);
              }}
              style={styles.cardgame}
            />
            <Card
              id={3}
              clicked={false}
              onclicked={id => {
                handleTouch(id);
              }}
              style={styles.cardgame}
            />
            <Card
              id={4}
              clicked={false}
              onclicked={id => {
                handleTouch(id);
              }}
              style={styles.cardgame}
            />
          </View>
        </View>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  cardPlacement: {
    flex: 0,
    flexDirection: "row",
    width: "100%",
    height: "50%"
  },
  cardPlacementReverse: {
    flexDirection: "row",
    width: "100%",
    height: "50%"
  },
  deckHolder: {
    alignSelf: "center",
    flexDirection: "row"
  },
  deckHolderReverse: {
    alignSelf: "center",
    flexDirection: "row"
  },
  cardgame: {
    marginTop: 10,
    width: 70,
    height: 110
  },
  line: {
    backgroundColor: "#aa36c7",
    width: "100%",
    height: 3,
    opacity: 0.5
  },
  playerSide: {},
  enemySide: {
    backgroundColor: "#4b065c",
    height: "45%"
  },
  separatorDeck: {
    marginBottom: 20
  },
  TextButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    fontSize: 20
  },
  MoneyButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "yellow",
    fontSize: 20
  },
  buyButton: {
    marginTop: 10,
    alignItems: "center",
    width: 150,
    height: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    shadowOffset: { width: 20, height: 20 },
    backgroundColor: "#3c0080"
  },

  container: {
    width: "100%",
    height: "80%"
  },
  cardContainer: {
    width: "100%",
    alignSelf: "center",
    minHeight: "81%"
  },
  logoImage: {
    marginTop: 20,
    width: 250,
    height: 150,
    marginBottom: 100
  },
  body: {
    backgroundColor: "#280154",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  }
});
