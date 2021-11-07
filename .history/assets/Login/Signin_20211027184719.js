import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Header from "../Shared/header";

export default function Signin(props) {
  return (
    <View>
      <Header backButton={true} navigation={props.navigation} />
      <Image
        source={{ src: "../img/florida-2.jpg" }}
        style={{ ...props.SigninIamge }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  SigninIamge: {},
});
