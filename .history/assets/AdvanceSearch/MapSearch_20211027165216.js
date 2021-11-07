import * as React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../Shared/header";
import MapComponent from "./MapComponent";
import Footer from "../Shared/Footer";
import { NativeBaseProvider } from "native-base";

export default function MapSearch() {
  return (
    <NativeBaseProvider>
      <Header />
      <View>
        <MapComponent style={styles.container} />
      </View>
      <Footer />
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
