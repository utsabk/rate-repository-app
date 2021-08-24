import React from 'react';
import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';

const initialValues = {
    username: '',
    password: '',
  };

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

  return (
    <View>
      <TextInput
        placeholder="Enter username"
        value={usernameField.value}
        onChangeText={(text) => usernameHelpers.setValue(text)}
      />
      <TextInput
        placeholder="Enter password"
        value={passwordField.value}
        secureTextEntry
        onChangeText={(text) => passwordHelpers.setValue(text)}
      />

    <Pressable onPress={onSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log('Username:-', username, 'Password:-', password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
