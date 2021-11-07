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

export default function Details(props) {
  const { item } = props;

  const totalArea = (area) => {
    return area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const bedAndGar = (val) => {
    return val.substring(0, val.length - 3);
  };

  return (
    <View style={{ ...styles.card }}>
      {item.Bedrooms ? (
        <View style={{ ...styles.upperBox }}>
          <Ionicons
            name="ios-bed-outline"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>{item.Bedrooms}</Text>
            <Text style={{ ...styles.LowerText }}>Bedrooms</Text>
          </View>
        </View>
      ) : (
        <View style={{ ...styles.upperBox }}>
          <Ionicons
            name="ios-bed-outline"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>0</Text>
            <Text style={{ ...styles.LowerText }}>Bedrooms</Text>
          </View>
        </View>
      )}

      {item.BathsTotal ? (
        <View style={{ ...styles.upperBox }}>
          <MaterialCommunityIcons
            name="shower"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>
              {bedAndGar(item.BathsTotal)} Bathrooms
            </Text>
            <Text style={{ ...styles.LowerText }}>Bathrooms</Text>
          </View>
        </View>
      ) : (
        <View style={{ ...styles.upperBox }}>
          <MaterialCommunityIcons
            name="shower"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>0 Bathrooms</Text>
            <Text style={{ ...styles.LowerText }}>Bathrooms</Text>
          </View>
        </View>
      )}

      {item.GarageSpaces ? (
        <View style={{ ...styles.upperBox }}>
          <AntDesign
            name="car"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>
              {bedAndGar(item.GarageSpaces)} Garage
            </Text>
            <Text style={{ ...styles.LowerText }}>Car Garage</Text>
          </View>
        </View>
      ) : (
        <View style={{ ...styles.upperBox }}>
          <AntDesign
            name="car"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>0 Garage</Text>
            <Text style={{ ...styles.LowerText }}>Car Garage</Text>
          </View>
        </View>
      )}

      {item.TotalArea ? (
        <View style={{ ...styles.upperBox }}>
          <Entypo
            name="map"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>
              {totalArea(item.TotalArea)} Sq Ft
            </Text>
            <Text style={{ ...styles.LowerText }}>Living Area</Text>
          </View>
        </View>
      ) : (
        <View style={{ ...styles.upperBox }}>
          <Entypo
            name="map"
            size={35}
            color="#172e6f"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={{ ...styles.upperText }}>0 Sq Ft</Text>
            <Text style={{ ...styles.LowerText }}>Living Area</Text>
          </View>
        </View>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {item.PropertyType ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.PropertyType}</Text>
            <Text style={{ ...styles.LowerText }}>Property Type</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.YearBuilt ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.YearBuilt}</Text>
            <Text style={{ ...styles.LowerText }}>Year Build</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Status ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Status}</Text>
            <Text style={{ ...styles.LowerText }}>Status</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.BathsFull ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.BathsFull}</Text>
            <Text style={{ ...styles.LowerText }}>Bath Full</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.BathsFull ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.BathsHalf}</Text>
            <Text style={{ ...styles.LowerText }}>Bath Half</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.BedsTotal ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.BedsTotal}</Text>
            <Text style={{ ...styles.LowerText }}>Beds Total</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.BuildingDesign ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.BuildingDesign}</Text>
            <Text style={{ ...styles.LowerText }}>Building Design</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.CableAvailableYN ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.CableAvailableYN ? "Yes" : "No"}
            </Text>
            <Text style={{ ...styles.LowerText }}>Cable</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Construction ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Construction}</Text>
            <Text style={{ ...styles.LowerText }}>Construction</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Cooling ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Cooling}</Text>
            <Text style={{ ...styles.LowerText }}>Cooling</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Electric ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Electric}</Text>
            <Text style={{ ...styles.LowerText }}>Electric</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Flooring ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Flooring}</Text>
            <Text style={{ ...styles.LowerText }}>Flooring</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Heat ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Heat}</Text>
            <Text style={{ ...styles.LowerText }}>Heat</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.NumUnitFloor ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.NumUnitFloor}</Text>
            <Text style={{ ...styles.LowerText }}>Number of Unit Floor</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.NumberDockHighDoors ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.NumberDockHighDoors}
            </Text>
            <Text style={{ ...styles.LowerText }}>Dock High Doors</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.NumberOfBays ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.NumberOfBays}</Text>
            <Text style={{ ...styles.LowerText }}>Number of Bays</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.LandSqFt ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.LandSqFt}</Text>
            <Text style={{ ...styles.LowerText }}>Land SqFt</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.LotType ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.LotType}</Text>
            <Text style={{ ...styles.LowerText }}>Lot Type</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.LotUnit ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.LotUnit}</Text>
            <Text style={{ ...styles.LowerText }}>Lot Unit</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.NumberOfParcelsLots ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.NumberOfParcelsLots}
            </Text>
            <Text style={{ ...styles.LowerText }}>Number of Parcels Lots</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.PricePerAcre ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.PricePerAcre}</Text>
            <Text style={{ ...styles.LowerText }}>Price Per Acre</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.PrivatePoolYN ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.PrivatePoolYN ? "Yes" : "No"}
            </Text>
            <Text style={{ ...styles.LowerText }}>Private Pool</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.PrivateSpaYN ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.PrivateSpaYN ? "Yes" : "No"}
            </Text>
            <Text style={{ ...styles.LowerText }}>Private Spa</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.TotalFloors ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.TotalFloors}</Text>
            <Text style={{ ...styles.LowerText }}>Total Floors</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.UnitCount ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.UnitCount}</Text>
            <Text style={{ ...styles.LowerText }}>Unit Count</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.UnitFloor ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.UnitFloor}</Text>
            <Text style={{ ...styles.LowerText }}>Unit Floor</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.UnitNumber ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.UnitNumber}</Text>
            <Text style={{ ...styles.LowerText }}>Unit Number</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.UnitsinBuilding ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.UnitsinBuilding}</Text>
            <Text style={{ ...styles.LowerText }}>Units in Building</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.UnitsinBuilding ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.UnitsinComplex}</Text>
            <Text style={{ ...styles.LowerText }}>Unit in Complex</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.UtilitiesAvailable ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.UtilitiesAvailable}
            </Text>
            <Text style={{ ...styles.LowerText }}>Utilities Available</Text>
          </View>
        ) : (
          <View></View>
        )}

        {JSON.parse(item.other_fields_json).View ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {JSON.parse(item.other_fields_json).View}
            </Text>
            <Text style={{ ...styles.LowerText }}>View</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.Water ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>{item.Water}</Text>
            <Text style={{ ...styles.LowerText }}>Water</Text>
          </View>
        ) : (
          <View></View>
        )}

        {item.WaterfrontYN ? (
          <View style={{ ...styles.box }}>
            <Text style={{ ...styles.upperText }}>
              {item.WaterfrontYN ? "Yes" : "No"}
            </Text>
            <Text style={{ ...styles.LowerText }}>Water Front</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  upperBox: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
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
  box: {
    marginVertical: 10,
    width: "50%",
  },
  upperText: {
    color: "#172e6f",
    fontSize: 20,
    fontWeight: "bold",
  },
  LowerText: {
    fontSize: 16,
    color: "#546cb1",
  },
});
