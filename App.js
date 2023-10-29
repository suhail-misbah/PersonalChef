import HomePage from "./screens/HomePage";
import Catergories from "./screens/Catergories";
import AddRecipe from "./screens/addRecipe/AddRecipe";
import Profile from "./screens/Profile";
import ViewRecipe from "./screens/ViewRecipe";
import SignIn from "./screens/signIn";

import { View } from "react-native";
import styles from "./assets/style";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
      <HomePage navigation={navigation} />
    </View>
  );
}

function CategoryScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
      <Catergories navigation={navigation} />
    </View>
  );
} 

function ProfileScreen() {
  return (
    <View style={styles.mainBody}>
      <Profile />
    </View>
  );
}

function AddRecipeScreen({ navigation }) {
  return (
    <View style={styles.mainBody}>
      <AddRecipe navigation={navigation}/>
    </View>
  );
}

function ViewRecipesScreen() {
  return (
    <View style={styles.mainBody}>
      <ViewRecipe />
    </View>
  );
}

function SignInScreen() {
  return (
    <View style={styles.mainBody}>
      <SignIn />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="layers-triple-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-edit-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddRecipe"
        component={AddRecipeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-box-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreens"
          component={TabScreens}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Stack.Screen
          name="ViewRecipes"
          component={ViewRecipesScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
