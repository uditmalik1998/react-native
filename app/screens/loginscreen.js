import { Image, View, ScrollView, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {
  const [values, setValues] = useState({ userId: "", password: "" });
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoid}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <View>
            <Image style={styles.appLogo} source={{ uri: 'https://picsum.photos/50' }} />
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingTxt}>Travel Desk</Text>
          </View>
          <View style={styles.textWrapper}>
            <TextInput style={styles.userText} placeholder="Enter User Id" value={values.userId} onChangeText={(text) => setValues((prevState) => ({ ...prevState, userId: text }))} keyboardType="default" />
            <TextInput style={styles.userText} placeholder="Enter Password" value={values.password} onChangeText={(text) => setValues((prevState) => ({ ...prevState, password: text }))} />
          </View>
          <TouchableOpacity style={styles.proceedBtn} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.txt}>Proceed</Text>
          </TouchableOpacity >
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  keyboardAvoid: { flex: 1 },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appLogo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 20
  },
  userText: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  textWrapper: {
    width: "90%"
  },
  proceedBtn: {
    backgroundColor: "#f84c4cff",
    paddingVertical: 10,
    paddingHorizontal: "38%",
    borderRadius: 10,
  },
  txt: {
    color: "white"
  },
  heading: {
    marginBottom: 20
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: 900
  }
})