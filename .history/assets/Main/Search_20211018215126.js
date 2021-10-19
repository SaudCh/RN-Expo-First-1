import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { Input, Select, VStack, CheckIcon, Button } from "native-base";

export default function Search(props) {
  let [service, setService] = useState("");
  return (
    <View style={{ ...styles.SearchContainer }}>
      <ImageBackground
        source={require("../img/logo/south-florida-homes-for-sale-header.jpg")}
        resizeMode="cover"
        style={styles.SearchImgBack}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          We Are <Text>#1</Text>
        </Text>
        <Text>
          Because We Put You <Text>First</Text>
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}
        >
          <Input
            isFullWidth="false"
            style={styles.SearchBar}
            placeholder="Input"
            mt={2}
          />

          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={2}
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{ backgroundColor: "white" }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={2}
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{ backgroundColor: "white" }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            my={2}
            w={{
              base: "100%",
              md: "25%",
            }}
            style={{ backgroundColor: "white" }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Button>Quick Search</Button>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  SearchContainer: {
    flex: 1,
    marginBottom: 10,
  },
  SearchImgBack: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  SearchBar: {
    width: "100%",
    backgroundColor: "white",
  },
});