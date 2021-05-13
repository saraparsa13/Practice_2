import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2FyYXBhcnNhIiwiYSI6ImNrb2lvZXJneDAzeWkydm53YXdtZ2g2NTYifQ.j77meGI5Gzkw8DodiIHjsg',
);

const MapScreen = () => {
  const [coordinates] = useState([-73.99155, 40.73581]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={8} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} id="Test" />
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