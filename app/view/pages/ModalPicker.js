import React from 'react'
import {
  StyleSheet,
  Modal,
  View,
  FlatList,
  TextInput,
  Text
} from 'react-native'

function ModalPicker({
  value,
  onChangeText,
  data,
  modalVisible,
  setModalVisible,
  setDialCode
}) {
  return (
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
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder='Country name or code '
              placeholderTextColor='#a6a6a6'
              style={styles.sectionModalInput} />
          </View>
          <FlatList
            data={data}
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
})

export default ModalPicker
