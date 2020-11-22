/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import data2 from '../data2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import data3 from '../data3';

export default function Search() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#ffffff00"
      />
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.card}>
            <View style={styles.drop}>
              <Text style={styles.dropText}>Drop Location</Text>
              <TouchableOpacity>
                <Feather name="x" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.search}>
              <View style={styles.inputWrapper}>
                <View style={styles.pinkDot} />
                <TextInput
                  placeholder="Where are you going?"
                  placeholderTextColor="#afb1b6"
                />
              </View>
              <View>
                <Feather name="heart" size={20} />
              </View>
            </View>
            <View style={styles.bottomCard}>
              <View style={styles.bottomCardPin}>
                <Fontisto
                  name="map-marker-alt"
                  size={20}
                  style={styles.bottomCardIcon}
                />
                <Text style={styles.bottomCardText}>
                  Tap to select from the map
                </Text>
              </View>
              <TouchableOpacity style={styles.buttonCircle}>
                <Feather
                  name="arrow-right"
                  size={20}
                  style={{color: 'white'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.contentWrapper}>
          <Text style={styles.bigTitle}>Favorite Places</Text>
          <View style={{marginBottom: 15}}>
            {data2.map((data) => {
              return (
                <View key={data.id} style={styles.favoriteWrapper}>
                  <View style={styles.favoriteWrapper2}>
                    <Fontisto
                      name="heart"
                      size={18}
                      style={{color: '#04dca0', marginRight: 10, paddingTop:4}}
                    />

                    <View>
                      <Text style={styles.favoriteTitle}> {data.title}</Text>
                      <Text style={styles.favoriteSubtitle}>
                        {data.subtitle}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Feather name="minus-circle" size={24} color="#FF6E7A" />
                  </View>
                </View>
              );
            })}
          </View>
          <View>
            <Text style={styles.bigTitle}>Recently visited places</Text>
            {data3.map((data) => {
              return (
                <View key={data.id} style={styles.recentWrapper}>
                  <MaterialCommunityIcons
                    name="clock-time-five"
                    color="#80828b"
                    size={24}
                    style={{marginRight: 10}}
                  />
                  <Text style={styles.recentText}>{data.title}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    marginHorizontal: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
  },
  drop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropText: {
    fontWeight: 'bold',
    color: '#ff5563',
  },

  search: {
    marginVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#efeff0',
    borderWidth: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinkDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#ff4858',
    marginRight: 10,
  },

  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomCardPin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomCardIcon: {
    color: '#ff4858',
    marginRight: 10,
  },
  bottomCardText: {
    color: '#92939b',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  contentWrapper: {
    padding: 20,
    marginTop: 40,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#404151',
    marginBottom: 20,
  },
  favoriteWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  favoriteWrapper2: {
    flexDirection: 'row',
  },
  favoriteTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#555664',
    marginBottom: 5,
    // alignSelf: 'flex-start'
  },
  favoriteSubtitle: {
    color: '#a9abb0',
  },
  recentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  recentText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#80828b',
  },

  favoriteBox: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
});
