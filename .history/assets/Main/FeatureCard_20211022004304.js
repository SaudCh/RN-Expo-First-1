import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { Button } from "native-base";

export default function FeatureCard(props) {
  const { item } = props;
  return (
    <View style={{ ...styles.container }}>
      <Image
        source={{ uri: `https://first1.us/${item.DefaultPic}` }}
        style={{ width: "100%", height: 200 }}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            lineHeight: 30,
            marginVertical: 5,
            fontWeight: "bold",
            color: "#09AFFF",
          }}
        >
          {item.SubCondoName}
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#535353", fontSize: 14, lineHeight: 24 }}>
        <Entypo name="location-pin" size={24} color="black" />{" "}
        {item.PropertyAddress}
      </Text>
      <Text
        style={{
          color: "#0076AE",
          fontSize: 22,
          lineHeight: 30,
          marginBottom: 20,
        }}
      >
        ${item.CurrentPrice}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>
          <Ionicons name="bed" size={24} color="black" /> {item.BedsTotal} Beds
        </Text>
        <Text style={{ marginLeft: 83 }}>
          <FontAwesome name="bathtub" size={24} color="black" />{" "}
          {item.BathsTotal} Bath
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>
          <FontAwesome name="car" size={24} color="black" /> {item.GarageSpaces}{" "}
          Garage
        </Text>
        <Text style={{ marginLeft: 50 }}>
          <Entypo name="map" size={24} color="black" /> {item.TotalArea} sqft
        </Text>
      </View>
      <Text style={{ marginTop: 10, marginBottom: 5, fontSize: 18 }}>
        {JSON.parse(item.other_fields_json).ListOfficeName}
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
          <Ionicons name="ios-alarm-outline" size={26} color="#0078B3" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btnContainer }}
          onPress={() => navigation.navigate("Property")}
        >
          <FontAwesome name="eye" size={25} color="#0078B3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    minWidth: 350,
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    backgroundColor: "white",
    elevation: 15,
  },
  btnContainer: {
    padding: 5,
    backgroundColor: "#D5F1FF",
    marginHorizontal: 10,
  },
});