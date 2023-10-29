import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../assets/style";
import RecipesData from "../services/Recipes.services";

export default function Recipes() {
  return (
    <View style={styles.recipes}>
      <Text style={styles.recipesHeader}>Recipes</Text>
      <View style={styles.recipesBody}>
        {RecipesData.map((row, index) => (
          <View style={styles.recipesContainer} key={index}>
            <Image style={styles.recipesImage} source={row.imagePath} />
            <View style={styles.recipesTextContainer}>
              <Text style={styles.ImageTextMain}>
                {row.name.length > 24
                  ? row.name.substring(0, 24 - 3) + "..."
                  : row.name}
              </Text>
              <Text style={styles.ImageTextSub}>
                {row.ingredientsTotal} ingredients | {row.prepTime}min |{" "}
                {row.servings} servings
              </Text>
              <Text style={styles.ImageTextUser}>
                Recipe by:{" "}
                {row.cook.length > 24
                  ? row.cook.substring(0, 24 - 3) + "..."
                  : row.cook}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
