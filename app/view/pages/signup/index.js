import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import Icons from 'react-native-vector-icons/AntDesign'
import gate from 'gate'
import { useApi } from 'helpers/useApi'

import { DATA } from '../DialCode'
import ModalPicker from '../ModalPicker'
import IGTextInput from 'View/components/IGTextInput'
import IGButton from 'View/components/IGButton'

const EmailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required')
})

const phoneNumRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
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


function SignUp() {
  const [sectionType, setSectionType] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialCode, setDialCode] = useState('IR +98')
  const navigation = useNavigation()
  const { data, isLoading, mutate, error } = useApi(gate.signUp)

  const [modalData, setModalData] = useState({
    inputText: '',
    filteredData: DATA
  })

  const search = (searchText) => {
    const FILTERED_DATA = DATA.filter((item) => {
      return item.name.includes(searchText) || item.dial_code.includes(searchText)
    })
    setModalData({ inputText: searchText, filteredData: FILTERED_DATA })
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])


  const signUp = async (data) => {
    try {
      const res = await gate.signUp(data)
      console.log(res)
      if (res.status === 'SUCCESS') {
        return navigation.navigate('VerifyCode', {
          phoneNumber: data.phone
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.sectionContainer}>
      {/* MODAL SECTION */}
      <ModalPicker
        visible={modalVisible}
        value={modalData.inputText}
        onChangeText={search}
        data={modalData.filteredData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setDialCode={setDialCode}
      />
      {/* EMAIL OR PHONE NUMBER PAGE */}
      <View style={styles.sectionIconContainer}>
        <Icons name='user' size={100} color='#bfbfbf' />
      </View>
      <View style={styles.sectionButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.2}
          style={
            sectionType ?
              styles.sectionEnableEmail :
              styles.sectionTouchableOpacity
          }
          onPress={() => setSectionType(true)}>
          <Text
            style={
              sectionType ?
                styles.sectionEnableFont :
                styles.sectionFontColor
            }
          >EMAIL ADDRESS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          style={
            sectionType ?
              styles.sectionTouchableOpacity :
              styles.sectionEnablePhoneNum
          }
          onPress={() => setSectionType(false)}>
          <Text
            style={
              sectionType ?
                styles.sectionEnableFont :
                styles.sectionFontColor
            }
          >PHONE NUMBER</Text>
        </TouchableOpacity>
      </View>
      {/* FORMS SECTION */}
      <View style={styles.sectionInputContainer}>
        {
          sectionType ?
            <Formik
              validateOnMount={true}
              validationSchema={EmailValidationSchema}
              initialValues={{ email: '' }}
              onSubmit={values => console.log(values)}>
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
                    name="email"
                    isValid={isValid}
                    touched={touched.email}
                    errors={errors.email}
                    value={values.email}
                    placeholderTextColor='#a6a6a6'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="email address"
                    keyboardType="email-address"
                    style={styles.sectionEmailInput}
                  />
                  {(errors.email && touched.email) &&
                    <Text style={styles.sectionErrorMsg}>{errors.email}</Text>
                  }
                  <IGButton
                    isValid={isValid}
                    values={values.phoneNum}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik> :
            <Formik
              validateOnMount={true}
              validationSchema={PhoneValidationSchema}
              initialValues={{ phoneNum: '', password: '' }}
              onSubmit={values =>
                signUp({ "phone": values.phoneNum, "password": values.password })
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
                      <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={styles.sectionDialCode}>
                        <Text style={styles.sectionDialCodeText}>{dialCode}</Text>
                      </TouchableOpacity>
                      <IGTextInput
                        isValid={isValid}
                        touched={touched.phoneNum}
                        errors={errors.phoneNum}
                        value={values.phoneNum}
                        name="phoneNum"
                        style={styles.sectionPhoneNumInput}
                        onChangeText={handleChange('phoneNum')}
                        onBlur={handleBlur('phoneNum')}
                        placeholder="phone number"
                        keyboardType="numeric"
                      />
                    </View>
                    {(errors.phoneNum && touched.phoneNum) &&
                      <Text style={styles.sectionErrorMsg}>{errors.phoneNum}</Text>
                    }
                    <View>
                      <IGTextInput
                        name="password"
                        isValid={isValid}
                        touched={touched.password}
                        errors={errors.password}
                        value={values.password}
                        style={styles.sectionPassInput}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholder="password"
                        keyboardType="numeric"
                      />
                    </View>
                    {(errors.password && touched.password) &&
                      <Text style={styles.sectionErrorMsg}>{errors.password}</Text>
                    }
                  </View>
                  <IGButton
                    values={values.phoneNum}
                    onPress={handleSubmit}
                    isValid={isValid}
                  />
                </>
              )}
            </Formik>
        }
      </View>
      <View style={styles.sectionBottom}>
        <Text style={styles.sectionBottomFont}>Already have an account?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 350,
    height: 400,
    margin: 20,
    backgroundColor: "#262626",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    color: 'white',
    fontSize: 20
  },
  sectionContainer: {
    backgroundColor: 'black',
    width: 'auto',
    flex: 1,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
  },
  sectionIconContainer: {
    width: 180,
    height: 180,
    marginLeft: 10,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  sectionButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  sectionTouchableOpacity: {
    borderWidth: 2,
    borderBottomColor: '#a6a6a6',
    padding: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  sectionFontColor: {
    color: '#a6a6a6',
    fontSize: 19
  },
  sectionInputContainer: {
    marginTop: 15
  },
  sectionEmailInput: {
    width: 440,
    height: 60,
    padding: 18,
    borderWidth: 1,
    backgroundColor: '#363636',
    borderRadius: 5,
    fontSize: 20,
    color: 'white'
  },
  sectionPhoneNumContaienr: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4
  },
  sectionPhoneNumInput: {
    width: 340,
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
  sectionDialCode: {
    height: 60,
    width: 100,
    borderWidth: 1,
    backgroundColor: '#363636',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionDialCodeText: {
    color: '#a6a6a6',
    fontSize: 20
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
  sectionEnableEmail: {
    borderWidth: 3,
    borderBottomColor: 'white',
    padding: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  sectionEnablePhoneNum: {
    borderWidth: 3,
    borderBottomColor: 'white',
    padding: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  sectionEnableFont: {
    color: 'white',
    fontSize: 19
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
  sectionButtonTxt: {
    color: 'white',
    fontSize: 20
  },
  sectionErrorMsg: {
    fontSize: 17,
    color: 'red',
    margin: 5
  },
  modalInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  sectionModalIcon: {
    alignSelf: 'center',
    marginRight: 20
  },
  sectionModalInput: {
    width: 280,
    borderWidth: 1,
    borderColor: '#a6a6a6',
    color: 'white',
    fontSize: 20,
    borderRadius: 5
  },
  sectionFlatListItem: {
    color: 'white',
    fontSize: 20
  },
  phonenumContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
})

export default SignUp
