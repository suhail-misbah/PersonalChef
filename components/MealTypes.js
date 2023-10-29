import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from "../assets/style";
import MealTypeData from '../services/MealTypes.services';

export default function MealTypes() {
  return (
    <View style={styles.categoriesMain}>
    <ScrollView horizontal={true}>
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

    </ScrollView>
  </View>
  )
}