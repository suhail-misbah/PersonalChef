import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import styles from "../assets/style";
import MealTypeData from "../services/MealTypes.services";
import Header from "../components/Header";

export default function Catergories({ navigation }) {
  return (
    <ScrollView>
      {/* user name and profile pic */}
      <Header pageTitle="Catergories"/>
      {/* search bar */}
      <View style={styles.searchBarMain}>
        <TextInput
          placeholder="Search for recipe"
          style={styles.searchBar}
        ></TextInput>
      </View>

      {/* Meal Types */}
      <View style={styles.RecipesMain}>
        {MealTypeData.map((row, index) => (
          <View style={styles.categoriesDetails} key={index}>
            <View style={styles.categoriesImageContainer}>
              <Image source={row.imagePath} style={styles.ingredientsImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.categoriesText}>{row.mealType}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
