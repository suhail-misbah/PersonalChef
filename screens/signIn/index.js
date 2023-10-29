import React, { useState } from "react";
import {
  TextInput,
  Text,
  Modal,
  Portal,
  PaperProvider,
  Button,
  Chip,
  Divider,
} from "react-native-paper";
import styles from "./style";
import { View, Image, Pressable } from "react-native";
import Register from "./Register";
import Login from "./Login";

export default function SignIn() {
  const [registerScreen, setRegisterScreen] = useState(false);

  return (
    <PaperProvider>
      <View style={styles.header}>
        <Text style={styles.headerFont}>
          {!registerScreen ? "Sign In" : "Register"}
        </Text>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/img_avatar.png")}
        />
      </View>
      <View style={styles.mainContainer}>
        {!registerScreen ? <Login /> : <Register />}
        <View style={styles.mainFooter}>
          {!registerScreen ? (
            <>
              <Text variant="titleSmall">
                Do not have a Account? &nbsp;
              </Text>
              <Pressable onPress={() => setRegisterScreen(true)}>
                <Text variant="titleSmall" style={styles.pressableText}>
                  Create New Account
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text variant="titleSmall">
                Already have a Account? &nbsp;
              </Text>
              <Pressable onPress={() => setRegisterScreen(false)}>
                <Text variant="titleSmall" style={styles.pressableText}>
                  Login to Account
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </PaperProvider>
  );
}
