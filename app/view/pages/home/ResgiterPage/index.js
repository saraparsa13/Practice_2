import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Modal, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import { Formik } from 'formik'
import * as yup from 'yup'

import { DATA } from './DialCode'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  phoneNum: yup
    .string()
    .matches(/^[0]?[789]\d{9}$/, 'Phone number is Not valid')
    .min(8, ({ min }) => `Phone number must be at least ${min} characters`)
    .required('phone number is required'),
})


function RegisterPage() {
  const [sectionType, setSectionType] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialCode, setDialCode] = useState('IR +98')

  const [data, setData] = useState({
    inputText: '',
    filteredData: DATA
  })

  // const validateEmail = (values) => {
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  //   !reg.test(values.email) ? false : true
  // }

  const search = (searchText) => {

    const FILTERED_DATA = DATA.filter((item) => {
      return item.name.includes(searchText) || item.dial_code.includes(searchText)
    })
    setData({ inputText: searchText, filteredData: FILTERED_DATA })
  }
  console.log(data)

  return (
    <View style={styles.sectionContainer}>
      {/* MODAL SECTION */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalInputContainer}>
              <Icons
                onPress={() => setModalVisible(false)}
                name='closecircleo'
                color='white'
                size={30}
                style={styles.sectionModalIcon} />
              <TextInput
                value={data.inputText}
                onChangeText={search}
                placeholder='Country name or code '
                placeholderTextColor='#a6a6a6'
                style={styles.sectionModalInput} />
            </View>
            <FlatList
              data={data.filteredData}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) =>
                <Text
                  onPress={() => setDialCode(item.code + ' ' + item.dial_code)}
                  style={styles.sectionFlatListItem}>
                  {item.name + '  ' + '(' + item.dial_code + ')'}
                </Text>
              }
            />
          </View>
        </View>
      </Modal>
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
              validationSchema={loginValidationSchema}
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
                  <TextInput
                    name="email"
                    style={styles.sectionEmailInput}
                    placeholderTextColor='#a6a6a6'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="email address"
                    keyboardType="email-address"
                  />
                  {(errors.email && touched.email) &&
                    <Text style={styles.sectionErrorMsg}>{errors.email}</Text>
                  }
                  <TouchableOpacity
                    disabled={!isValid || values.email === ''}
                    style={
                      !isValid ?
                        styles.disableButton :
                        styles.enableButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.sectionButtonTxt}>Next</Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik> :
            <Formik
              validateOnMount={true}
              validationSchema={loginValidationSchema}
              initialValues={{ phoneNum: '' }}
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
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(true)}
                      style={styles.sectionDialCode}>
                      <Text style={styles.sectionDialCodeText}>{dialCode}</Text>
                    </TouchableOpacity>
                    <TextInput
                      name="phoneNum"
                      style={styles.sectionPhoneNumInput}
                      placeholderTextColor='#a6a6a6'
                      onChangeText={handleChange('phoneNum')}
                      onBlur={handleBlur('phoneNum')}
                      value={values.phoneNum}
                      placeholder="phone number"
                      keyboardType="numeric"
                    />
                  </View>
                  {(errors.phoneNum && touched.phoneNum) &&
                    <Text style={styles.sectionErrorMsg}>{errors.phoneNum}</Text>
                  }
                  <TouchableOpacity
                    disabled={!isValid || values.phoneNum === ''}
                    onPress={handleSubmit}
                    style={!isValid ? styles.disableButton : styles.enableButton}>
                    <Text style={styles.sectionButtonTxt}>Next</Text>
                  </TouchableOpacity>
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
    width: 230,
    borderWidth: 1,
    borderColor: '#a6a6a6',
    color: 'white',
    fontSize: 20,
    borderRadius: 5
  },
  sectionFlatListItem: {
    color: 'white',
    fontSize: 20
  }
})

export default RegisterPage
