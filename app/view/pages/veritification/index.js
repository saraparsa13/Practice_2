import React from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import tokenHelper from 'helpers/token';
import { Formik } from 'formik'
import * as yup from 'yup'
import gate from 'gate'

import IGTextInput from 'View/components/IGTextInput'
import IGButton from '../../components/IGButton';

const CodeValidationSchema = yup.object().shape({
  code: yup
    .string()
    .min(6, ({ min }) => `Phone number must be ${min} characters`)
    .max(6, ({ max }) => `Phone number must be ${max} characters`)
    .required('Confirmation Code is Required')
})

const verify = async (data) => {
  try {
    const res = await gate.verify(data)
    if (res.status === 'SUCCESS') {
      const storeToken = tokenHelper.set(res.data.token)
      console.log(storeToken)
    }
  } catch (error) {
    console.log(error)
  }
}

const resend = async (data) => {
  try {
    const res = await gate.resend(data)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

function VerifyCode() {
  const route = useRoute()
  let phone = route.params.phoneNumber
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitleText}>ENTER CONFIRMATION CODE</Text>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Enter the 6-digit code we sent to {' '}
            {route.params.phoneNumber}. {' '}
            <Text
              onPress={() => resend({"phone": route.params.phoneNumber})}
              style={styles.headerRequestButton}>
              Resquest a new one
            </Text>
          </Text>
        </View>
      </View>
      {/* FORMS SECTION */}
      <View style={styles.sectionInputContainer}>
        <Formik
          validateOnMount={true}
          validationSchema={CodeValidationSchema}
          initialValues={{ code: '' }}
          onSubmit={
            values =>
              verify({ phone, "verifyCode": values.code })
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

              <IGTextInput
                name="code"
                style={styles.veritificationInput}
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                value={values.code}
                errors={errors.code}
                touched={touched.code}
                placeholder="Veritification Code"
                keyboardType="numeric"
              />
              {(errors.code && touched.code) &&
                <Text style={styles.sectionErrorMsg}>{errors.code}</Text>
              }
              <IGButton
                isValid={isValid}
                values={values.code}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
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
  header: {
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  headerTitleText: {
    color: 'white',
    fontSize: 21,
    marginBottom: 20
  },
  headerTextContainer: {
    width: 350,
    textAlign: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },
  headerRequestButton: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0195f7'
  },
  sectionInputContainer: {
    marginTop: 15
  },
  veritificationInput: {
    width: 440,
    height: 60,
    padding: 18,
    borderWidth: 1,
    backgroundColor: '#363636',
    borderRadius: 5,
    fontSize: 20,
    color: 'white'
  },
  disableButton: {
    width: 440,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#012e4d',
    marginTop: 10,
  },
  enableButton: {
    width: 440,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#0195f7',
    marginTop: 10,
  },
  sectionButtonTxt: {
    color: 'white',
    fontSize: 20
  },
  sectionErrorMsg: {
    fontSize: 17,
    color: 'red',
    margin: 5
  },
})

export default VerifyCode
