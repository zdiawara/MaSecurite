import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../icon/background.png')}
          style={styles.backgroundImage}>
          <View style={styles.view1}>
            <Image style={styles.image} source={require('../icon/Logo.png')} />
          </View>
          <Text style={styles.title}> Ma Sécurité Routière </Text>
          <Button
            title="GPS"
            onPress={() => {
              this.props.navigation.navigate('AppMAP');
            }}
          />
          <Button
            title="Profile Utilisateur"
            onPress={() => {
              this.props.navigation.navigate('ProfileScreen');
            }}
          />
          <Button
            title="Guide du bon conducteur"
            onPress={() => {
              this.props.navigation.navigate('GuideConducteur');
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor : 'lightgray',
    //margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
  },
  body: {
    fontSize: 22,
  },
});
