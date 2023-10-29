import { View } from "react-native";
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

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false)


  const handleLogin = () => {
    if(loginDetails.email === '') {
        setErrorEmail(true)
    } else {
        setErrorEmail(false)
    }

    if(loginDetails.password === '') {
        setErrorPassword(true)
    } else {
        setErrorPassword(false)
    }

  }


  return (
      <View style={styles.loginContainer}>
        <TextInput
          label="Email"
          error={errorEmail}
          value={loginDetails.email}
          style={styles.textBox}
          textColor="black"
          theme={{
            colors: {
              primary: 'black'
            }
          }}
          onChangeText={(text) =>
            setLoginDetails({ ...loginDetails, email: text })
          }
        />
        <TextInput
          label="Password"
          error={errorPassword}
          secureTextEntry={showPassword}
          value={loginDetails.password}
          style={styles.textBox}
          textColor="black"
          theme={{
            colors: {
              primary: 'black'
            }
          }}
          onChangeText={(text) =>
            setLoginDetails({ ...loginDetails, password: text })
          }
          right={<TextInput.Icon icon={!showPassword ? "eye" : "eye-off"} onPress={() => setShowPassword(!showPassword)}/>}
        />
        <Button
          icon="login"
          mode="contained"
          onPress={() => handleLogin()}
        >
          Sign In
        </Button>
      </View>
  );
}
