import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../Shared/header";
import Footer from "../Shared/Footer";
import FavouriteCard from "./FavouriteCard";

const { width, height } = Dimensions.get("window");

export default function FeatureListings(props) {
  const { navigation } = props;
  const [favCity, setFavCity] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      getUser();
      getMovies();
      //console.log(user);
    })
  );

  const getUser = async () => {
    await AsyncStorage.getItem("@user_id").then((val) => {
      if (val) {
        //console.log(val);
        setUser(val);
        //setTable(val);
      }
    });
  };

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://first1.us/api/favourite.php?data=${user}`
      );
      const json = await response.json();
      //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
      setFavCity(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
    getMovies();
  }, []);
  return (
    <NativeBaseProvider>
      <Header navigation={props.navigation} />
      <ScrollView>
        {user !== "0" ? (
          <View>
            {/******************Feature City Section******************/}
            <View style={styles.featureCityContainer}>
              <AntDesign
                style={{ marginRight: 10 }}
                name="staro"
                size={24}
                color="black"
              />
              <Text style={styles.featureCityText}>Favourite Listings</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {isLoading ? (
                <View style={{ ...styles.activityContainer }}>
                  <ActivityIndicator size="large" color="red" />
                </View>
              ) : (
                <FlatList
                  data={favCity}
                  keyExtractor={({ MLSNumber }, index) => MLSNumber}
                  renderItem={({ item }) => (
                    <FavouriteCard item={item} navigation={navigation} />
                  )}
                />
              )}
            </View>
          </View>
        ) : (
          <View style={{ ...styles.loginContainer }}>
            <Image
              style={styles.logo}
              source={require("../img/logo/logo-bg-null.png")}
            />
          </View>
        )}
        <Footer />
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  featureCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  featureCityText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  activityContainer: {
    height: 400,
    alignContent: "center",
    justifyContent: "center",
  },
  loginContainer: {
    height: height * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginLeft: 10,
    width: 150,
    height: 70,
    resizeMode: "center",
  },
});
