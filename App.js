import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';
import {latitudeAtual, latitudeEstudo, longitudeAtual, longitudeEstudo} from 'react'








export default function App() {
 
  const[origin, setOrigin] = useState(null);
  const[destination, setDestination] = useState(null);

useEffect(() => {
  (async function( ){
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      let latitudeAtual = location.coords.latitude;
      let latitudeEstudo = -19.90;
     setOrigin( { 
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421,
     })
    } else {
      throw new Error('Location permission not granted');
    }
  } ) ();
  
if (latitudeAtual != latitudeEstudo) {
    alert("Voce esta no lugar de estudo");
} else {
  alert("Voce nao esta estudando");
}
}, [])

  return (
    
    <View style={styles.container}>
      <MapView style={styles.map}
     region={origin, destination}
     showsUserLocation = {true}
     zoomEnabled = {true}
     loadingEnabled = {true}
   >
     <Marker coordinate = {{latitude: -30.32, longitude: -43.272929}} // Posicao definida pelo estudante onde normlamente estuda
     
     /> 
   </MapView>

      </View>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});