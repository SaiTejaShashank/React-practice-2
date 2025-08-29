import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('email'),
  password: Yup.string().min(8).required().label('password'),
  name: Yup.string().min(8).required().label('name'),
});

export default function Screen5() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}
    >
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log('submitted', values);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
          setFieldTouched,
          touched,
        }) => (
          <View style={{ width: '70%', padding: 10 }}>
            <TextInput
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              style={styles.textFieldStyle}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <Text style={styles.errorStyle}>{errors.name}</Text>
            )}
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              style={styles.textFieldStyle}
              placeholder="Email"
            />
            {touched.email && errors.email && (
              <Text style={styles.errorStyle}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              style={styles.textFieldStyle}
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <Text style={styles.errorStyle}>{errors.password}</Text>
            )}
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                margin: 10,
                alignSelf: 'center',
                backgroundColor: 'yellow',
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text>Submit Form</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  textFieldStyle: {
    borderColor: 'brown',
    borderWidth: 1,
    margin: 20,
  },

  errorStyle: {
    color: 'red',
  },
});
