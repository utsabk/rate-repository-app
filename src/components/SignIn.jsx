import React from 'react';
import * as Yup from 'yup';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#fb5b5a',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
};


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Enter username" />
      <FormikTextInput
        name="password"
        placeholder="Enter password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.loginBtn}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
  .required('Password is required'),

});

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log('Username:-', username, 'Password:-', password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
