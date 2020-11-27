import React, {Component} from 'react';
import {Share} from 'react-native';
import {Platform} from 'react-native';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from 'react-native';
//import UserAvatar from 'react-native-user-avatar';
import {getDistance, getDistanceInfra} from './utils/helper';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      distance: 0,
      distanceInfra: 0,
    };
  }

  componentDidMount() {
    this.iniDistance();
  }

  async iniDistance() {
    const distance = await getDistance();
    const distanceInfra = await getDistanceInfra();
    this.setState({
      distance: distance,
      distanceInfra: distanceInfra,
    });
  }

  onSahre = () => {
    let text = 'Helloooo test test test';
    if (Platform.OS === 'android')
      text = text.concat('https://www.youtube.com');
    else text = text.concat('https://www.youtube.com');
    Share.share(
      {
        subect: 'MOI',
        title: 'MOI',
        message: text,
        url: 'app://freakyItians',
      },
      {
        //Android
        dialogTitle: 'Please Like Share and subscribe !!!',
        //iOS
        excludeActivityTypes: [],
      },
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: '#000',
              height: 150,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../icon/Slogan.png')}
                style={{width: 30, height: 30}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            {/** 
             * 
             * <UserAvatar
              size={100}
              name="Stephan Kwan"
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                marginTop: -70,
                backgroundColor: 'steelblue',
              }}
            />
             * 
             */}
            <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}>
              Stephan KWAN
            </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>
              {' '}
              25, Homme{' '}
            </Text>
          </View>

          <TouchableOpacity style={styles.infoBoxScore}>
            <ImageBackground
              source={require('../icon/iconLaurier.png')}
              style={{width: 180, height: 150, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 30,
                  color: '#111111',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {' '}
                100%{' '}
              </Text>
            </ImageBackground>
            <Text
              style={{
                fontSize: 15,
                color: '#818181',
                fontWeight: 'bold',
                padding: 10,
              }}>
              {' '}
              Score{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoBox}>
            <Image
              source={require('../icon/iconLocalisation.png')}
              style={{width: 20, height: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#818181',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {this.state.distance}, {this.state.distanceInfra}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoBoxShare} onPress={this.onSahre}>
            <Image
              source={require('../icon/iconShare.png')}
              style={{width: 20, height: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#818181',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              {' '}
              Partager{' '}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxScore: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 22,
    elevation: 15,
    marginTop: 20,
  },
  infoBoxShare: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    width: '50%',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 22,
    elevation: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  infoBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    width: '50%',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 22,
    elevation: 15,
    marginTop: 20,
  },
});
