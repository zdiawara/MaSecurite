import React, {Component} from 'react';
import {Alert, Button, Share, TextInput} from 'react-native';
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
import {getDistance, getDistanceInfra, getName, setName} from './utils/helper';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      distance: 0,
      distanceInfra: 0,
      showForm: false,
      name: 'Prénom NOM',
    };
  }

  componentDidMount() {
    this.initDistance();
    getName()
      .then((name) => {
        this.setState({name});
      })
      .then((e) => {
        console.log(e);
      });
  }

  async initDistance() {
    const distance = await getDistance();
    const distanceInfra = await getDistanceInfra();
    this.setState({distance, distanceInfra});
  }
  
  onSahre = () => {
    let text = `Mon score est ${this.buildScore()}%`;

    Share.share(
      {
        subect: 'MOI',
        title: 'MOI',
        message: text,
        url: 'app',
      },
      {
        //Android
        dialogTitle: 'Ok',
        //iOS
        excludeActivityTypes: [],
      },
    );
  };

  buildScore = () => {
    const distance = parseInt(this.state.distance, 10);
    const distanceInfra = parseInt(this.state.distanceInfra, 10);
    if (distance === 0) {
      return 100;
    }
    return (1 - distanceInfra / distance) * 100;
  };

  onEditName = () => {
    this.setState({showForm: true});
  };

  saveName = async () => {
    try {
      if (!this.state.name || this.state.name.trim() === '') {
        Alert.alert('Erreur de saisie', 'Entrez un nom valide');
        return;
      }
      await setName(this.state.name);
      this.setState({showForm: false});
    } catch (error) {
      console.error(error);
    }
  };

  renderName = () => {
    if (this.state.showForm) {
      // Afficher le formulaire
      return (
        <View style={{padding: 5, flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={{
              height: 40,
              flex: 1,
              borderColor: 'gray',
              backgroundColor: '#fff',
              borderWidth: 1,
            }}
            onChangeText={(name) => {
              this.setState({name});
            }}
            placeholder="Prénom NOM"
            value={this.state.name}
          />
          <View style={{marginHorizontal: 5}}>
            <Button
              onPress={() => {
                this.setState({showForm: false});
              }}
              color="red"
              title="Annuler"
            />
          </View>
          <Button onPress={this.saveName} title="Valider" />
        </View>
      );
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            padding: 10,
          }}>
          {this.state.name}
        </Text>

        {/** TODO : à changer par un rayon */}
        <Button onPress={this.onEditName} title="Modifier" />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <ImageBackground 
          source={require('../icon/Slogan.png')}
          style={{height: 150, width: '100%', justifyContent: 'center'}}>
        </ImageBackground>

          {this.renderName()}

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
                {`${this.buildScore()}%`}
              </Text>
            </ImageBackground>
            <Text
              style={{
                fontSize: 15,
                color: '#818181',
                fontWeight: 'bold',
                padding: 10,
              }}>
              Score
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoBox}>
            <Text style={styles.distance}>
              Distance totale : {this.state.distance} km
            </Text>
            <Text style={styles.distance}>
              Infraction : {this.state.distanceInfra} km
            </Text>
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Text style={styles.distance}>
              Réception Score : xxxxxxx@gmail.com  
            </Text>
          </View>

          <TouchableOpacity style={styles.infoBoxShare} onPress={this.onSahre}>
            <Image
              source={require('../icon/iconShare.png')}
              style={{width: 20, height: 20}}
            />
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
    width: '90%',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 22,
    elevation: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  infoBox: {
    alignSelf: 'center',
    //flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 0,
    elevation: 15,
    marginTop: 20,
  },
  distance: {
    fontSize: 15,
    justifyContent: 'center',
    color: '#818181',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
