import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../icon/background.png')}
          style={styles.backgroundImage}>
          <View style={styles.container2}>
            <View style={styles.view1}>
              <Image style={styles.image} source={require('../icon/Logo.png')} />
            </View>
            <View style={styles.viewButton}>
              <Button
                title="GPS"
                type="outline"
                reased
                onPress={() => {
                  this.props.navigation.navigate('AppMAP');
                }}
              />
            </View>
            <View style={styles.viewButton}>
              <Button
                title="Profil Utilisateur"
                type="outline"
                reased
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}
              />
            </View>
            <View style={styles.viewButton}>
              <Button
                title="Guide du bon conducteur"
                type="outline"
                reased
                onPress={() => {
                  this.props.navigation.navigate('GuideConducteur');
                }}
              />
            </View>
            <Text>{'\n'} {'\n'}</Text>
            <Button
              title="Condition générale d'utilisation"
              type="clear"
              onPress={() => {
                this.props.navigation.navigate('CGU');
              }}
            />
          </View>
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
  container2: {
    flex: 1,
    marginTop: '20%',
  },
  viewButton: {
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    marginBottom:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
  },
  body: {
    fontSize: 22,
  },
});
