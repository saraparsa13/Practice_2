import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { PermissionsAndroid } from 'react-native';
import LocationEnabler from 'react-native-location-enabler';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2FyYXBhcnNhIiwiYSI6ImNrb2lvZXJneDAzeWkydm53YXdtZ2g2NTYifQ.j77meGI5Gzkw8DodiIHjsg',
);
const {
  PRIORITIES: { HIGH_ACCURACY },
  useLocationSettings,
} = LocationEnabler;

const MapScreen = () => {
  const [searchText, setSearchText] = useState('')
  const [enabled, requestResolution] = useLocationSettings({
    priority: HIGH_ACCURACY,
  })

  const [mapState, setMapState] = useState({
    isGranted: false,
    coordinates: [51.189988, 32.260997]
  })

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
  //   fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/ir.json?access_token=pk.eyJ1Ijoic2FyYXBhcnNhIiwiYSI6ImNrb2lvZXJneDAzeWkydm53YXdtZ2g2NTYifQ.j77meGI5Gzkw8DodiIHjsg&proximity=51.189988%2C32.260997')
  //     .then(response => response.json())
  //     .then(res => console.log(res))
  // }, [])

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder='Search'
          style={styles.input} />
        <MapboxGL.MapView
          ref={(ref) => { _map = ref || _map }}
          localizeLabels
          zoomEnabled
          scrollEnabled
          rotateEnabled
          style={styles.map}>

          {mapState.isGranted &&
            <MapboxGL.UserLocation
              renderMode='normal'
              androidRenderMode='normal'
              visible
              ref={(location) => { console.log({ location }) }}
              // onUpdate=setLocationManager({running: false})
              showUserLocation={true} />
          }
          <MapboxGL.Camera
            animationDuration={4000}
            animationMode='flyTo'
            centerCoordinate={mapState.coordinates}
            zoomLevel={3.2}
            followUserLocation={mapState.isGranted}
          />
          {/* <MapboxGL.PointAnnotation
            draggable
            coordinate={mapState.coordinates}
            id="Test" /> */}

        </MapboxGL.MapView>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  map: {
    flex: 1,
  },
  input: {
    height: 50,
    width: 'auto',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 6,
    fontSize: 19
  }
});

export default MapScreen;