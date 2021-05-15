import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { PermissionsAndroid } from 'react-native';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2FyYXBhcnNhIiwiYSI6ImNrb2lvZXJneDAzeWkydm53YXdtZ2g2NTYifQ.j77meGI5Gzkw8DodiIHjsg',
);

const MapScreen = () => {
  const [mapState, setMapState] = useState({
    isGranted: false,
    coordinates: [33.577438, 53.367362]
  })
  // useEffect(() => {
  //   PermissionsAndroid.requestMultiple(
  //     [
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //       PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION 
  //     ],
  //     {
  //       title: 'Give Location Permission',
  //       message: "Allow Elegant to access this device's location?"
  //     }
  //   ).then(granted => {
  //     console.log(granted)
  //   }).catch(err => {
  //     console.warn(err);
  //   });

  // }, [])
  useEffect(() => {
    if (!mapState.isGranted) {
      MapboxGL.requestAndroidLocationPermissions()
        .then(granted => setMapState({...mapState, isGranted: granted}))
        .catch(err => console.log('err', err))
    }
  }, [])

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
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
              showUserLocation={true} />
          }

          <MapboxGL.Camera
            zoomLevel={2}
            followUserLocation={true}
            centerCoordinate={mapState.coordinates} />
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
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;