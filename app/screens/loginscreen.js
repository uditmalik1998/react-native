import {
  Image,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [values, setValues] = useState({ userId: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoid}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Image
              style={styles.appLogo}
              source={{ uri: 'https://picsum.photos/50' }}
            />
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingTxt}>Travel Desk</Text>
          </View>
          <View style={styles.textWrapper}>
            <TextInput
              style={styles.userText}
              placeholder="Enter User Id"
              value={values.userId}
              onChangeText={text =>
                setValues(prevState => ({ ...prevState, userId: text }))
              }
              keyboardType="default"
            />
            <View style={styles.passwordWrapper}>
              <TextInput
                style={styles.password}
                placeholder="Enter Password"
                value={values.password}
                secureTextEntry={!showPassword}
                onChangeText={text =>
                  setValues(prevState => ({ ...prevState, password: text }))
                }
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={24}
                  color="#000000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.proceedBtn}
            onPress={() => navigation.navigate('Main')}
          >
            <Text style={styles.txt}>Proceed</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  keyboardAvoid: { flex: 1 },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  userText: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  passwordWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  password: {
    width: '90%',
  },
  textWrapper: {
    width: '90%',
  },
  proceedBtn: {
    backgroundColor: '#D22B2B',
    paddingVertical: 10,
    paddingHorizontal: '38%',
  },
  txt: {
    color: 'white',
  },
  heading: {
    marginBottom: 20,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: 900,
  },
});
