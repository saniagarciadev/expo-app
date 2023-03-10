import React from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoic2FuaWFvbmxpbmUiLCJhIjoiY2w5dm1qbXR6MHpmZjN2bXl5NTM0amFobCJ9.T8zMsiXPu6nZLTBWqwYg2A"
);

const MapView = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default MapView;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
