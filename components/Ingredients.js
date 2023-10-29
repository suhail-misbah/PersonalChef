import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "../assets/style";
import IngredientsData from "../services/Ingredients.services";

export default function Ingredients() {
  return (
    <View style={styles.ingredientsBody}>
      <ScrollView horizontal={true}>
        {IngredientsData.map((row, index) => (
          <View style={styles.ingredientsDetails} key={index}>
            <View style={styles.ingredientsImageContainer}>
              <Image source={row.imagePath} style={styles.ingredientsImage} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.ingredientsText}>{row.name}</Text>
              <Text style={styles.ingredientsSubText}>{row.quantity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
