import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "../assets/style";
import RecipesData from "../services/Recipes.services";


export default function Recommended({navigation}) {

  const pressHandler = () => {
    navigation.navigate('ViewRecipes');
  }

  return (
    <View style={styles.recommended}>
      <Text style={styles.recommendedHeader}>Recommended</Text>
      <ScrollView horizontal={true}>
        <View style={styles.recommendedBody}>
          {RecipesData.map((row, data) => (
            <TouchableWithoutFeedback key={data} onPress={pressHandler}>
            <View style={styles.recommendedImageContainer} >
              <Image style={styles.recommendedImage} source={row.imagePath} />
              <Text style={styles.ImageTextMain}>
                {row.name.length > 20
                  ? row.name.substring(0, 20 - 3) + "..."
                  : row.name}
              </Text>
              <Text style={styles.ImageTextSub}>
                {row.ingredientsTotal} ingredients | {row.prepTime}min |{" "}
                {row.servings} servings
              </Text>
              <Text style={styles.ImageTextUser}>
                Recipe by:{" "}
                {row.cook.length > 20
                  ? row.cook.substring(0, 20 - 3) + "..."
                  : row.cook}
              </Text>
            </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
