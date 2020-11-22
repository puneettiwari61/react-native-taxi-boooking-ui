/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import mapStyle from '../style';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/selection.json';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Car = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

export default function Home(props) {
  const handlePick = () => {
    props.navigation.navigate('Search');
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#ffffff00"
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -6.337131,
            longitude: 107.279725,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01 * ASPECT_RATIO,
          }}
          customMapStyle={mapStyle}>
          <Marker coordinate={{latitude: -6.335495, longitude: 107.280031}}>
            <View style={styles.pin}>
              <Fontisto
                name="map-marker-alt"
                size={30}
                style={{color: '#02dc9f'}}
              />
            </View>
          </Marker>
          <Marker coordinate={{latitude: -6.339089, longitude: 107.278325}}>
            <View style={styles.marker}>
              <Ionicons name="navigate" size={20} style={{color: '#fff'}} />
            </View>
          </Marker>
        </MapView>
        <View>
          <SafeAreaView style={styles.safeArea}>
            <View>
              <Feather name="menu" size={24} />
            </View>
            <TouchableOpacity style={styles.search}>
              <View style={styles.inputWrapper}>
                <View style={styles.greenDot} />
                <View>
                  <Text style={styles.inputText}> Your Pickup Location?</Text>
                </View>
              </View>
              <View>
                <Feather name="heart" size={20} color="#97989f" />
              </View>
            </TouchableOpacity>
          </SafeAreaView>
          <View style={styles.categoryWrapper}>
            {data.map((d) => {
              return (
                <View key={d.id} style={styles.category}>
                  <Text style={{color: d.id === '1' ? '#5d5e6b' : '#c1c2c7'}}>
                    {d.name}
                  </Text>
                  {/* <Car
                    style={{color: d.id === '1' ? '#5d5e6b' : '#c1c2c7'}}
                    name={d.icon}
                    size={45}
                  /> */}
                  <MaterialCommunityIcons
                    name={d.icon}
                    size={45}
                    style={{color: d.id === '1' ? '#5d5e6b' : '#c1c2c7'}}
                  />
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.buttonWraper}>
          <TouchableOpacity style={styles.button} onPress={handlePick}>
            <Text style={styles.buttonText}>PickMe Here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    marginHorizontal: 20,
  },
  search: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.05,
    elevation: 3,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#0ddda2',
    marginRight: 10,
  },
  inputText: {
    fontWeight: '600',
    color: '#97989f',
  },

  categoryWrapper: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'absolute',
    right: 0,
    elevation: 20,
    top: height / 4,
  },
  category: {
    alignItems: 'center',
    // marginBottom: 15,
  },

  buttonWraper: {
    // alignSelf: 'flex-end',
    // justifyContent
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pin: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'rgba(2,220,159,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
