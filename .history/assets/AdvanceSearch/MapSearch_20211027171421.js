import * as React from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import Header from "../Shared/header";
import MapComponent from "./MapComponent";
import Footer from "../Shared/Footer";
import { NativeBaseProvider } from "native-base";

const { width, height } = Dimensions.get("window");

export default function MapSearch() {
  return (
    <NativeBaseProvider>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <MapComponent />
        </View>
        <Footer />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.9,
  },
});
