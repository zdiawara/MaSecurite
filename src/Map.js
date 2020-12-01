import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform, ImageBackground} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import HaversineGeolocation from 'haversine-geolocation';
import {getSpeedLimit} from '../API/SpeedLimit';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {setDistance, setDistanceInfra} from './utils/helper';

export default class AppMap extends Component {
  static navigationOptions = {
    title: 'Nevers',
  };

  constructor() {
    super();
    this.state = {
      speedLimit: 0,
      initialPosition: null,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      speed: 0,
      // distance total en infra
      distance: 0,
      distanceInfra: 0,
      point1: null,
      point2: null,
    };
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  componentWillUnmount() {
    this.saveDistance();
  }

  async saveDistance() {
    await setDistance(this.state.distance);
    await setDistanceInfra(this.state.distanceInfra);
  }

  /**
   * Methode d'initialisation des points
   */
  initialPosition() {
    Geolocation.watchPosition((position) => {
      const {latitude, longitude} = position.coords;
      const currentPoint = {latitude, longitude};
      this.setState({
        point1: currentPoint,
        point2: currentPoint,
        initialPosition: {
          ...currentPoint,
          latitudeDelta: 0.035,
          longitudeDelta: 0.035,
        },
      });
    });

    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        const currentPoint = {latitude, longitude};
        this.setState({
          point1: currentPoint,
          point2: currentPoint,
          initialPosition: {
            ...currentPoint,
            latitudeDelta: 0.035,
            longitudeDelta: 0.035,
          },
        });
      },
      (error) => {
        console.log(error);
        //Alert.alert(error.message);
      },
      {enableHighAccuracy: true, maximumAge: 1000, timeout: 30 * 1000},
    );
  }

  onUserLocationChange = (param) => {
    //console.log(param.nativeEvent.coordinate);
    const {coordinate} = param.nativeEvent;
    if (!coordinate) {
      return;
    }
    const {latitude, longitude, speed} = coordinate;
    this.setState({speed: parseInt(3.6 * parseFloat(speed), 10)});
    const locationRestriction = `${latitude},${longitude}`;
    getSpeedLimit(locationRestriction, (link) => {
      this.setState({
        speedLimit: parseInt(3.6 * parseFloat(link.speedLimit), 10),
      });
    });

    /// Point1 devient Point2 et Point2 prends la valeur courante
    this.setState((state) => {
      const point1 = state.point2;
      const point2 = {latitude, longitude};
      if (!point1 || !point2) {
        return {};
      }

      // Calcul de la distance
      const distance = HaversineGeolocation.getDistanceBetween(point1, point2);

      const newState = {
        point1,
        point2,
        distance: state.distance + distance,
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.035,
          longitudeDelta: 0.035,
        },
      };

      // L'ut est en infro
      if (state.speed > state.speedLimit) {
        newState.distanceInfra = state.distanceInfra + distance;
      }
      console.log(JSON.stringify(newState));
      return newState;
    });
  };

  requestLocationPermission = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    try {
      const response = await request(permission);

      if (response === 'granted') {
        console.log('PERM ACCORDEE');
        this.initialPosition();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={(map) => (this._map = map)}
          showsUserLocation={true}
          onUserLocationChange={this.onUserLocationChange.bind(this)}
          style={styles.map}
          initialRegion={this.state.initialPosition}
          showsMyLocationButton
          region={this.state.region}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.box1}>
            <Text style={styles.text}>
              {' '}
              {'\n'} Vitesse {'\n'} {this.state.speed} km/h{' '}
            </Text>
          </View>
          <View style={styles.box3}>
            <ImageBackground
              source={require('../icon/panneau2.png')}
              style={styles.image1}>
              <Text style={styles.text2}> {this.state.speedLimit} </Text>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  box1: {
    //...StyleSheet.absoluteFillObject,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'seagreen',
  },
  image1: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  box3: {
    //...StyleSheet.absoluteFillObject,
    width: 100,
    height: 100,
    //backgroundColor: 'white',
    flexDirection: 'row-reverse',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
  },
});
