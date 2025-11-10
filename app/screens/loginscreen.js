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
import Font from 'react-native-vector-icons/FontAwesome';
import { validateForm } from '../utils/commonfunctions';

const LoginScreen = () => {
  const [values, setValues] = useState({ userId: '', password: '' });
  const [error, setError] = useState({
    userId: '',
    password: '',
    apiError: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleClick = async () => {
    setError({ userId: '', password: '' });
    const isError = validateForm(values, setError);
    if (!isError) {
      try {
        const payload = {
          code: values.userId,
          password: values.password,
        };
        const data = await fetch(
          'https://traveldesk.v2retail.com:5050/api/Auth/login',
          {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload),
          },
        );
        const json = await data.json();
        console.log(json);
        // navigation.navigate('Main');
      } catch (err) {
        console.error(err);
        setError(prevState => ({ ...prevState, apiError: err.message }));
      }
    }
  };

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
            <Text style={styles.subHeading}>
              Something Text for the SubHeading
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.userIdText}>User Id</Text>
            <View style={styles.passwordWrapper}>
              <Font name="user" size={24} color="#D22B2B" />
              <TextInput
                style={styles.password}
                placeholder="Enter User Id"
                value={values.userId}
                onChangeText={text =>
                  setValues(prevState => ({ ...prevState, userId: text }))
                }
                keyboardType="default"
              />
            </View>
            {error?.userId && <Text style={styles.err}>{error.userId}</Text>}
            <Text style={styles.userIdText}>Password</Text>
            <View style={styles.passwordWrapper}>
              <Font name="lock" size={24} color="#D22B2B" />
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
                <Font
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={24}
                  color="#D22B2B"
                  style={styles.eyeWrapper}
                />
              </TouchableOpacity>
            </View>
            {error?.password && (
              <Text style={styles.err}>{error.password}</Text>
            )}
            {error?.apiError && (
              <Text style={styles.err}>{error.apiError}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.proceedBtn} onPress={handleClick}>
            <Text style={styles.txt}>Proceed</Text>
          </TouchableOpacity>
          <Text style={styles.bottomHeading}>
            Something Text for the Bottom Heading
          </Text>
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
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#36454F',
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  password: {
    width: '86%',
  },
  textWrapper: {
    width: '90%',
  },
  proceedBtn: {
    backgroundColor: '#D22B2B',
    paddingVertical: 10,
    paddingHorizontal: '38%',
    borderRadius: 10,
  },
  txt: {
    color: 'white',
    fontWeight: '600',
  },
  heading: {
    marginBottom: 40,
    alignItems: 'center',
  },
  headingTxt: {
    fontSize: 32,
    fontWeight: 900,
    color: '#36454F',
  },
  subHeading: {
    fontSize: 14,
    color: '#36454F',
    fontWeight: '600',
  },
  bottomHeading: {
    color: '#36454F',
    paddingTop: 30,
  },
  userIdText: {
    fontWeight: '600',
    color: '#36454F',
    paddingBottom: 5,
  },
  err: {
    color: '#D22B2B',
    paddingBottom: 5,
  },
});
