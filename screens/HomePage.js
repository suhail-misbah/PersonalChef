import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "../assets/style";
import Recipes from "../components/Recipes";
import MealTypes from "../components/MealTypes";
import Recommended from "../components/Recommended";
import Header from "../components/Header";

export default function HomePage({navigation}) {
  return (
    <ScrollView>
      {/* user name and profile pic */}
      <Header pageTitle="Hello, Suhail"/>
      {/* search bar */}
      <View style={styles.searchBarMain}>
        <TextInput
          placeholder="Search for recipe"
          style={styles.searchBar}
        ></TextInput>
      </View>
      {/* recipes categories */}
        <MealTypes />
      {/* recomended */}
        <Recommended navigation={navigation}/>
      {/* recipes */}
        <Recipes />

      {/* navigation */}
    </ScrollView>
  );
}
