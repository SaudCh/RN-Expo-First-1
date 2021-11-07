import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Input } from "native-base";

export default function Mortage(props) {
  const { item } = props;
  const year = new Date().getFullYear();
  return (
    <View style={{ ...styles.card }}>
      <Text style={{ ...styles.Heading }}>Mortage Calculator</Text>
      <View>
        <View style={{ ...styles.container }}>
          <Input
            mx="3"
            InputLeftElement={
              <Feather name="dollar-sign" size={24} color="black" />
            }
            placeholder="Input"
            w={{
              base: "75%",
              md: "25%",
            }}
          />
        </View>
        <View style={{ ...styles.container }}></View>
        <View style={{ ...styles.container }}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
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
  container: {
    marginBottom: 10,
  },
  Heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2D3954",
    borderBottomColor: "#f5f6fa",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  upperText: {
    color: "#172e6f",
    fontSize: 20,
    fontWeight: "bold",
  },
  lowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
  box: {
    marginBottom: 10,
  },
  paraGraph: {
    fontSize: 17,
    lineHeight: 25,
  },
});
