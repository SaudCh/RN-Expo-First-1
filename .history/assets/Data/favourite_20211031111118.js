import AsyncStorage from "@react-native-async-storage/async-storage";
const getUser = async () => {
  await AsyncStorage.getItem("@user_id").then((val) => {
    if (val) {
      //console.log(val);
      console.log(val);
      //setTable(val);
    } else {
      return 0;
    }
  });
};

const getMovies = async () => {
  try {
    const response = await fetch(
      `https://first1.us/api/favourite.php?data=${getUser()}`
    );
    const json = await response.json();
    //console.log(json.data[0].other_fields_json.ActiveOpenHouseCount);
    console.log(json.data);
  } catch (error) {
    console.error(error);
  } finally {
    //setLoading(false);
  }
};

export function favCities() {
  return getMovies();
}
