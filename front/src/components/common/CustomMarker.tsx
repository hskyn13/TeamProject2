import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LatLng, Marker, MyMapMarkerProps} from 'react-native-maps';

import {colorHex, colors} from '@/constants';
import {MarkerColor} from '@/types';

interface CustomMarkerProps extends MyMapMarkerProps {
  coordinate?: LatLng;
  color: MarkerColor;
  score?: number;
}

function CustomMarker({
  coordinate,
  color,
  score = 5,
  ...props
}: CustomMarkerProps) {
  const markerView = (
    <View style={styles.container}>
      <View style={[styles.marker, {backgroundColor: colorHex[color]}]}></View>
    </View>
  );

  return coordinate ? (
    <Marker coordinate={coordinate} {...props}>
      {markerView}
    </Marker>
  ) : (
    markerView
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 32,
    alignItems: 'center',
  },
  marker: {
    transform: [{rotate: '45deg'}],
    width: 27,
    height: 27,
    borderRadius: 27,
    borderBottomRightRadius: 1,
    borderWidth: 1,
    borderColor: colors.BLACK,
  },
});

export default CustomMarker;
