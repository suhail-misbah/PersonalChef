import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Header from "../../components/Header";
import styles from "./style";
import stylesRecipe from "../../assets/style";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AllIngredients from "../../services/Ingredients";

export default function AddRecipe({ navigation }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [editTitle, setEditTitle] = useState(false);
  const [calories, setCalories] = useState(null);
  const [servings, setServings] = useState(null);
  const [visible, setVisible] = useState(false);

  const [addIngredientModal, setAddIngredientModal] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [ingredientQty, setIngredientQty] = useState(null);
  const [ingredientUnit, setIngredientUnit] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const [newStepModal, setNewStepModal] = useState(false);
  const [prepTimeHours, setPrepTimeHours] = useState({
    value: null,
    error: false,
  });
  const [prepTimeMinutes, setPrepTimeMinutes] = useState({
    value: null,
    error: false,
  });

  const [newInstruction, setNewInstruction] = useState(null);
  const [step, setStep] = useState(null);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    (async () => {
      // Request permission to access the camera
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    })();
  }, []);

  const takePicture = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleIngredients = (name, qty, unit) => {
   setIngredients([...ingredients, { name, qty, unit }]);

   setSelectedIngredient(null);
   setIngredientQty(null);
   setIngredientUnit(null);
   setAddIngredientModal(false);
  };

  const handleIngredientDelete = (ingredient) => {
   const updatedIngredients = ingredients.filter(
     (data) => data.name !== ingredient
   );
   setIngredients(updatedIngredients);
 };

  const handleInstructions = (stepNumber, newDescription) => {
    const stepIndex = instructions.findIndex(
      (step) => step.step === stepNumber
    );
    if (stepIndex !== -1) {
      // Update existing step
      const updatedSteps = [...instructions];
      updatedSteps[stepIndex] = {
        ...updatedSteps[stepIndex],
        description: newDescription,
      };
      setInstructions(updatedSteps);
    } else {
      // Create a new step
      const newStep = {
        step: stepNumber,
        description: newDescription,
      };
      setInstructions([...instructions, newStep]);
    }

    setNewInstruction(null);
    setStep(null);
    setNewStepModal(false);
  };

  const handleStepDelete = (stepNumber) => {
    const updatedSteps = instructions.filter(
      (step) => step.step !== stepNumber
    );
    setInstructions(updatedSteps);
    setNewInstruction(null);
    setStep(null);
    setNewStepModal(false);
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const showIngredientModal = () => setAddIngredientModal(true);
  const hideIngredientModal = () => setAddIngredientModal(false);

  const showNewStepModal = (step, description) => {
    setStep(step);
    setNewInstruction(description);
    setNewStepModal(true);
  };

  const hideNewStepModal = () => {
    setNewInstruction(null);
    setNewStepModal(false);
  };

  const getMaxStepNumber = () => {
    if (instructions.length === 0) {
      return 1; // No steps in the array, so the maximum step number is 0.
    }

    return (
      instructions.reduce(
        (max, step) => (step.step > max ? step.step : max),
        instructions[0].step
      ) + 1
    );
  };

  return (
    <PaperProvider>
      <ScrollView>
        <Header pageTitle="Add a Recipe" />
        {/* Main Image */}
        <View style={styles.uploadImageContainer}>
          {image && (
            <Image style={stylesRecipe.mainImage} source={{ uri: image }} />
          )}
          <Button onPress={takePicture} icon="camera" mode="contained">
            {image ? "Update picture" : "Take a picture"}
          </Button>
        </View>
        {/* dish details */}
        <View style={stylesRecipe.dishDetailsMain}>
          <View>
            {!editTitle ? (
              <Pressable onPress={() => setEditTitle(!editTitle)}>
                <Text style={stylesRecipe.dishDetailsHeader}>
                  {title || "Enter Title of Recipe"}
                </Text>
              </Pressable>
            ) : (
              <TextInput
                label="Enter Title of Recipe"
                onChangeText={setTitle}
                mode="outlined"
                value={title}
                onBlur={() => setEditTitle(false)}
              />
            )}

            <Text style={stylesRecipe.dishDetailsSubHeader}>6 Ingredients</Text>
          </View>
          <Pressable onPress={showModal}>
            <View style={stylesRecipe.dishDetailsSub}>
              <View style={stylesRecipe.dishDetailsSub}>
                <MaterialCommunityIcons
                  name="clock-time-five-outline"
                  color="#d89f03"
                  size={30}
                />
                <Text style={stylesRecipe.dishDetails}>
                  {" "}
                  {`${prepTimeHours.value || "00"} h:${
                    prepTimeMinutes.value || "00"
                  } m`}
                </Text>
              </View>

              <View style={stylesRecipe.dishDetailsSub}>
                <MaterialCommunityIcons name="fire" color="#d89f03" size={30} />
                <Text style={stylesRecipe.dishDetails}>
                  {" "}
                  {calories || "0"} Calories
                </Text>
              </View>
              <View style={stylesRecipe.dishDetailsSub}>
                <MaterialCommunityIcons
                  name="circle-outline"
                  color="#d89f03"
                  size={30}
                />
                <Text style={stylesRecipe.dishDetails}>
                  {" "}
                  {servings || "0"} serves
                </Text>
              </View>
            </View>
          </Pressable>
        </View>

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}
          >
            <View style={styles.nutritionFacts}>
              <View style={styles.prepTimeContainer}>
                <Text>Prep Time: </Text>
                <TextInput
                  label="HH"
                  value={prepTimeHours.value}
                  mode="outlined"
                  onChangeText={(text) =>
                    setPrepTimeHours({ ...prepTimeHours, value: text })
                  }
                  keyboardType="numeric"
                  maxLength={2}
                  error={prepTimeHours.error || prepTimeHours.value > 24}
                />
                <TextInput
                  label="MM"
                  value={prepTimeMinutes.value}
                  mode="outlined"
                  onChangeText={(text) =>
                    setPrepTimeMinutes({ ...prepTimeMinutes, value: text })
                  }
                  keyboardType="numeric"
                  maxLength={2}
                  error={prepTimeMinutes.error || prepTimeMinutes.value > 60}
                />
              </View>
            </View>

            <TextInput
              mode="outlined"
              onChangeText={setCalories}
              value={calories}
              label="Calories"
              keyboardType="numeric"
            />

            <TextInput
              mode="outlined"
              onChangeText={setServings}
              value={servings}
              label="Servings"
              keyboardType="numeric"
            />
          </Modal>
        </Portal>
        {/* ingredients */}
        <View style={stylesRecipe.ingredientsMain}>
          <Text style={stylesRecipe.ingredientsHeader}>Ingredients</Text>
          <Button icon="plus" onPress={showIngredientModal}>
            Add Ingredient
          </Button>
          <Portal>
            <Modal
              visible={addIngredientModal}
              onDismiss={hideIngredientModal}
              contentContainerStyle={styles.containerStyle}
            >
              <Text variant="titleLarge">Select Ingredient</Text>
              <ScrollView style={{ maxHeight: 300 }}>
                <View style={styles.ingredients}>
                  {AllIngredients.map((row, index) => (
                    <Chip
                      mode="outlined"
                      key={index}
                      onPress={() => setSelectedIngredient(row.name)}
                    >
                      <Text style={stylesRecipe.ingredientsText}>
                        {row.name}
                      </Text>
                    </Chip>
                  ))}
                </View>
              </ScrollView>
              <Divider></Divider>
              <TextInput
                mode="outlined"
                onChangeText={setIngredientQty}
                value={ingredientQty}
                label="Value / Quantity"
                keyboardType="numeric"
              />
              <Divider></Divider>
              <View style={styles.ingredients}>
                {AllIngredients.filter(
                  (name) => name.name === selectedIngredient
                ).map((row) =>
                  row.unit.map((data, index) => (
                    <Chip
                      mode="outlined"
                      key={index}
                      onPress={() => setIngredientUnit(data)}
                    >
                      <Text style={stylesRecipe.ingredientsText}>{data}</Text>
                    </Chip>
                  ))
                )}
              </View>
              <Divider></Divider>
              <Text variant="titleMedium">
                {selectedIngredient} | {ingredientQty} {ingredientUnit}{" "}
              </Text>
              <Button
                  onPress={() =>
                    handleIngredients(
                     selectedIngredient,
                     ingredientQty,
                     ingredientUnit,
                    )
                  }
                mode="contained"
                disabled={
                  selectedIngredient && ingredientQty && ingredientUnit
                    ? false
                    : true
                }
              >
                Add
              </Button>
            </Modal>
          </Portal>
          <View style={styles.ingredients}>
            {ingredients.map((row, index) => (
              <Chip mode="outlined" key={index} onClose={() => handleIngredientDelete(row.name)}>
                <Text style={stylesRecipe.ingredientsText}>{row.name}</Text> |{" "}
                <Text style={stylesRecipe.ingredientsSubText}>
                  {row.qty} {row.unit}
                </Text>
              </Chip>
            ))}
          </View>
        </View>
        {/* cooking instructions */}
        <View style={stylesRecipe.instructionMain}>
          <View>
            <Text style={stylesRecipe.instructionHeader}>
              Cooking Instructions
            </Text>
          </View>

          {instructions.map((data, index) => (
            <Pressable
              onPress={() => showNewStepModal(data.step, data.description)}
              key={index}
            >
              <View style={stylesRecipe.instructionBody}>
                <View
                  style={[
                    stylesRecipe.instructionCard,
                    { backgroundColor: "#cefbc49c" },
                  ]}
                >
                  <Text
                    style={[
                      stylesRecipe.instructionCardHeader,
                      { color: "#22b900" },
                    ]}
                  >
                    Step {index + 1}
                  </Text>
                  <Text style={stylesRecipe.description}>
                    {data.description}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
          <View style={stylesRecipe.instructionBody}>
            <Button onPress={() => showNewStepModal(null, null)} icon="plus">
              Add New Step
            </Button>
            <Portal>
              <Modal
                visible={newStepModal}
                onDismiss={hideNewStepModal}
                contentContainerStyle={styles.containerStyle}
              >
                <Text variant="titleLarge">
                  Step: {step || getMaxStepNumber()}
                </Text>
                <TextInput
                  mode="outlined"
                  onChangeText={setNewInstruction}
                  value={newInstruction}
                  label="Instruction"
                  multiline
                />
                <View>
                  {step ? (
                    <Button onPress={() => handleStepDelete(step)}>
                      Delete
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button onPress={hideNewStepModal}>Close</Button>
                  <Button
                    onPress={() =>
                      handleInstructions(
                        step || getMaxStepNumber(),
                        newInstruction
                      )
                    }
                    mode="contained"
                    disabled={newInstruction ? false : true}
                  >
                    {step ? "Edit" : "Save"}
                  </Button>
                </View>
              </Modal>
            </Portal>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
