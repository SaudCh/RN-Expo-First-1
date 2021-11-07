import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Header } from "../Shared/header";
import MapComponent from "MapComponent";

export default function MapSearch() {
  return (
    <View style={styles.container}>
      <Header />
      <MapComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
