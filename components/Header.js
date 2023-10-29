import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "../assets/style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function Header(props) {

  const navigation = useNavigation();

  const login = false;
  if(!login) {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerFont}>{props.pageTitle}</Text>
      <Image
        style={styles.headerLogo}
        source={require("../assets/img_avatar.png")}
      />
    </View>
  );
}
