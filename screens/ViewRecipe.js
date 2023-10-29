import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "../assets/style";
import Ingredients from "../components/Ingredients";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ViewRecipe({ navigation }) {
  return (
    <ScrollView>
      {/* Main Image */}
      <View>
        <Image
          style={styles.mainImage}
          source={require("../assets/images/food4.png")}
        />
      </View>
      {/* Recipe Creator */}
      <View style={styles.creatorMain}>
        <Image
          style={styles.creatorLogo}
          source={require("../assets/img_avatar.png")}
        />
        <View style={styles.creatorText}>
          <Text style={styles.creatorSubTitle}>Recipe by:</Text>
          <Text style={styles.creatorName}>Suhail Misbah</Text>
        </View>
      </View>
      {/* dish details */}
      <View style={styles.dishDetailsMain}>
        <View>
          <Text style={styles.dishDetailsHeader}>Fried Chicken Thighs</Text>
          <Text style={styles.dishDetailsSubHeader}>6 Ingredients</Text>
        </View>
        <View style={styles.dishDetailsSub}>
          <View style={styles.dishDetailsSub}>
            <MaterialCommunityIcons
              name="clock-time-five-outline"
              color="#d89f03"
              size={30}
            />
            <Text style={styles.dishDetails}> 30 mins</Text>
          </View>
          <View style={styles.dishDetailsSub}>
            <MaterialCommunityIcons name="fire" color="#d89f03" size={30} />
            <Text style={styles.dishDetails}> 234 kall</Text>
          </View>
          <View style={styles.dishDetailsSub}>
            <MaterialCommunityIcons
              name="circle-outline"
              color="#d89f03"
              size={30}
            />
            <Text style={styles.dishDetails}> 3 serves</Text>
          </View>
        </View>
      </View>
      {/* ingredients */}
      <View style={styles.ingredientsMain}>
        <Text style={styles.ingredientsHeader}>Ingredients</Text>

        <Ingredients />
      </View>
      {/* cooking instructions */}
      <View style={styles.instructionMain}>
        <View>
          <Text style={styles.instructionHeader}>Cooking Instructions</Text>
        </View>

        <View style={styles.instructionBody}>
          <View
            style={[styles.instructionCard, { backgroundColor: "#cefbc49c" }]}
          >
            <Text style={[styles.instructionCardHeader, { color: "#22b900" }]}>
              Step 1
            </Text>
            <Text style={styles.instructionCardBody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </View>
        </View>

        <View style={styles.instructionBody}>
          <View
            style={[styles.instructionCard, { backgroundColor: "#9cddf980" }]}
          >
            <Text style={[styles.instructionCardHeader, { color: "#0048c0" }]}>
              Step 2
            </Text>
            <Text style={styles.instructionCardBody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum has been the industry's standard
              dummy text ever since the 1500s is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the
            </Text>
          </View>
        </View>

        <View style={styles.instructionBody}>
          <View
            style={[styles.instructionCard, { backgroundColor: "#f9eebaa1" }]}
          >
            <Text style={[styles.instructionCardHeader, { color: "#e9c000" }]}>
              Step 3
            </Text>
            <Text style={styles.instructionCardBody}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </View>
        </View>
      </View>
      {/* other recipies */}
    </ScrollView>
  );
}
