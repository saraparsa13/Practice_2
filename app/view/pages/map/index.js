import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import LocationEnabler from 'react-native-location-enabler';
import * as turf from '@turf/turf'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import LocationItem from './LocationItem'

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2FyYXBhcnNhIiwiYSI6ImNrb2lvZXJneDAzeWkydm53YXdtZ2g2NTYifQ.j77meGI5Gzkw8DodiIHjsg'
const LIMIT = 10

MapboxGL.setAccessToken(
  ACCESS_TOKEN,
);
const {
  PRIORITIES: { HIGH_ACCURACY },
  useLocationSettings,
} = LocationEnabler;


const MapScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [fetchData, setFetchData] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('')
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['15%', '70%'], [])
  const [enabled, requestResolution] = useLocationSettings({
    priority: HIGH_ACCURACY,
  })

  const [mapState, setMapState] = useState({
    isGranted: false,
    coordinates: [51.189988, 32.260997]
  })

  // const line = turf.lineString([[51.338896, 35.697993], mapState.coordinates]);
  // const bbox = turf.bbox(line);
  // const bboxPolygon = turf.bboxPolygon(bbox);

  // useEffect(() => {
  //   if (!mapState.isGranted) {
  //     MapboxGL.requestAndroidLocationPermissions()
  //       .then(granted => {
  //         setMapState({ ...mapState, isGranted: granted })
  //         if (!enabled && granted) {
  //           requestResolution()
  //         }
  //       })
  //       .catch(err => console.log('err', err))
  //   }
  // }, [])

  const fetcher = (text) => {
    setSearchText(text)
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${ACCESS_TOKEN}&proximity=${mapState.coordinates[0]}%2C${mapState.coordinates[1]}&limit=${LIMIT}&country=IR`)
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setFetchData(res.features)
      })
      .catch(err => console.log(err))
  }
  function MapBox() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          localizeLabels
          zoomEnabled
          scrollEnabled
          rotateEnabled
          style={styles.map}>

          {mapState.isGranted && enabled &&
            <MapboxGL.UserLocation
              renderMode='normal'
              androidRenderMode='normal'
              visible
              onUpdate={location => {
                const currentCoords = [
                  location.coords.longitude,
                  location.coords.latitude
                ]
                setMapState({ ...mapState, coordinates: currentCoords })
                // console.log(location)
              }}
              showUserLocation={true} />
          }
          <MapboxGL.Camera
            animationDuration={2000}
            animationMode='flyTo'
            centerCoordinate={selectedLocation ? selectedLocation : mapState.coordinates}
            zoomLevel={6}
            followUserLocation={mapState.isGradnte}
          />
          {selectedLocation.length !== 0 &&
            <MapboxGL.PointAnnotation
              coordinate={selectedLocation}
              id="Test" />
          }

          {/* <MapboxGL.PointAnnotation
            id="1"
            title={'title'}
            coordinate={mapState.coordinates}>
            <MapboxGL.Callout title={'title'} textStyle={{ color: 'red' }} />
          </MapboxGL.PointAnnotation> */}

        </MapboxGL.MapView>
      </View>
    )
  }


  return (
    <View style={styles.bottomSheetContainer}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={() => <MapBox />}
      >
        <View style={styles.contentContainer}>
          <TextInput
            value={searchText}
            onChangeText={(text) => {
              fetcher(text)
            }}
            placeholder='Search here'
            autoFocus
            style={styles.input} />
          <BottomSheetFlatList
            data={fetchData}
            keyExtractor={(item) => item?.id.toString()}
            renderItem={({ item }) => {
              return (
                <LocationItem
                  onPressHandler={() => {
                    setSelectedLocation(item.center)
                  }}
                  title={item?.place_name} />
              )
            }}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={fetchData}
            keyExtractor={(item) => item?.id.toString()}
            renderItem={({ item }) => {
              return (
                <LocationItem
                  onPressHandler={() => {
                    setSelectedLocation(item.center)
                    // setModalVisible(!modalVisible)
                  }}
                  title={item?.place_name} />
              )
            }}
          />
        </View>
      </BottomSheet>
    </View>

  );
};

const styles = StyleSheet.create({
  // page: {
  //   flex: 1,
  // },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
  input: {
    height: 45,
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 30,
    fontSize: 19,
    paddingHorizontal: 15
  },
  contentContainer: {
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  }
});

export default MapScreen
