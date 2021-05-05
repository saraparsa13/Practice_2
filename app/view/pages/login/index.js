import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useMutation } from 'react-query'

import gate from 'gate'
import TextInput from 'View/components/TextInput'
import Button from 'View/components/Button'

// const phoneNumRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
const PhoneValidationSchema = yup.object().shape({
  phoneNum: yup
    .string()
    // .matches(phoneNumRegex, 'Phone number is Not valid')
    .min(11, ({ min }) => `Phone number must be ${min} characters`)
    .max(11, ({ max }) => `Phone number must be ${max} characters`)
    .required('Phone number is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(32, ({ max }) => `Password must be at last ${max} characters`)
    .required('Password is required'),
})


function Login() {
  const navigation = useNavigation()
  const { mutate } = useMutation(gate.signIn, {
    onSuccess: (data) => {
      console.log( 'login data =>>>>' , data)
      const storeToken = tokenHelper.set(data.data.token)
    }
  })

  return (
    <View style={styles.sectionContainer}>
      {/* EMAIL OR PHONE NUMBER PAGE */}
      <View style={styles.sectionIconContainer}>
        <Text style={styles.title}>Instagram</Text>
      </View>
      {/* FORMS SECTION */}
      <View style={styles.sectionInputContainer}>
        <Formik
          validateOnMount={true}
          validationSchema={PhoneValidationSchema}
          initialValues={{ phoneNum: '', password: '' }}
          onSubmit={values =>
            mutate({ "phone": values.phoneNum, "password": values.password })
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.phonenumContainer}>
                <View style={styles.sectionPhoneNumContaienr}>
                  <TextInput
                    error={errors.phoneNum && touched.phoneNum}
                    value={values.phoneNum}
                    name="phoneNum"
                    style={styles.sectionPhoneNumInput}
                    onChangeText={handleChange('phoneNum')}
                    onBlur={handleBlur('phoneNum')}
                    placeholder="phone number"
                    keyboardType="numeric"
                  />
                </View>
                <View>
                  <TextInput
                    name="password"
                    error={errors.password && touched.password}
                    value={values.password}
                    style={styles.sectionPassInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholder="password"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <Button
                title='Next'
                onPress={handleSubmit}
                disable={isValid}
              />
            </>
          )}
        </Formik>
      </View>
      <View style={styles.sectionBottom}>
        <Text style={styles.sectionBottomFont}>Already have an account?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'black',
    width: 'auto',
    flex: 1,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    fontFamily: 'cursive'
  },
  sectionIconContainer: {
    width: 280,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    marginBottom: 20
  },
  sectionInputContainer: {
    marginTop: 15
  },
  sectionPhoneNumContaienr: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4
  },
  sectionPhoneNumInput: {
    width: 440,
    height: 60,
    padding: 18,
    borderWidth: 1,
    backgroundColor: '#363636',
    borderRadius: 5,
    fontSize: 20,
    color: 'white'
  },
  sectionPassInput: {
    width: 440,
    height: 60,
    padding: 18,
    borderWidth: 1,
    backgroundColor: '#363636',
    borderRadius: 5,
    fontSize: 20,
    color: 'white'
  },
  sectionBottom: {
    justifyContent: 'flex-end',
    flex: 1,
    margin: 10
  },
  sectionBottomFont: {
    color: '#a6a6a6',
    fontSize: 18
  },
  phonenumContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export default Login
