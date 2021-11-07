import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Shared/header";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "native-base";

export default function Basic(props) {
  const { item } = props;

  console.log(item.DOM);
  console.log(item.DateAdded);

  const priceConversion = (price) => {
    price = price.substring(0, price.length - 3);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <View style={{ ...styles.card2 }}>
      <View style={{ marginVertical: 10 }}>
        <Button style={{ backgroundColor: "#00A600", width: "45%" }}>
          {item.Status}
        </Button>
      </View>

      <View style={{ marginBottom: 10 }}>
        {item.PotentialShortSaleYN === "0" ? (
          <View></View>
        ) : (
          <Button style={{ width: "45%" }}>{item.PotentialShortSaleYN}</Button>
        )}
        {item.ForeclosedREOYN === "0" ? (
          <View></View>
        ) : (
          <Button style={{ width: "45%" }}>{item.ForeclosedREOYN}</Button>
        )}
      </View>

      <Text style={{ ...styles.Heading, marginBottom: 10 }}>
        {item.SubCondoName}
      </Text>
      <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
        <EvilIcons
          name="location"
          size={24}
          color="#72809D"
          style={{ marginRight: 10 }}
        />
        {item.PropertyAddress}
      </Text>
      <Text style={{ ...styles.Heading2, marginBottom: 10 }}>
        <Ionicons
          name="menu"
          size={25}
          color="#72809D"
          style={{ marginRight: 10 }}
        />
        MLS #:{item.MLSNumber}
      </Text>
      <Text style={{ ...styles.Heading, marginBottom: 10 }}>
        ${priceConversion(item.CurrentPrice)}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 5,
          paddingTop: 10,
          borderTopWidth: 1,
        }}
      >
        <TouchableOpacity style={{ ...styles.btnContainer }}>
          <AntDesign name="hearto" size={25} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.btnContainer }}>
          <FontAwesome5 name="envelope" size={25} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.btnContainer }}>
          <FontAwesome name="share" size={25} color="#0078B3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Heading: {
    fontSize: 25,
    color: "#2D3954",
    fontWeight: "700",
  },
  Heading2: {
    color: "#72809D",
    fontSize: 20,
    fontWeight: "700",
  },
  btnContainer: {
    padding: 5,
    backgroundColor: "#D5F1FF",
    marginHorizontal: 10,
  },
  text1: {
    textAlign: "left",
  },
  text2: {
    textAlign: "left",
  },
  text3: {
    textAlign: "right",
  },
  text4: {
    textAlign: "right",
  },
  card2: {
    padding: 10,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  box: {
    marginVertical: 10,
  },
  wheel: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 30,
  },
});
