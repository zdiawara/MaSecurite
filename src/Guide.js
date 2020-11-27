import React, {Component} from 'react';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';

import FitImage from 'react-native-fit-image';

const {height, width} = Dimensions.get('window');

const IMAGES = [
  require('../GuideElem/1.png'),
  require('../GuideElem/2.png'),
  require('../GuideElem/3.png'),
  require('../GuideElem/4.png'),
  require('../GuideElem/5.png'),
  require('../GuideElem/6.png'),
  require('../GuideElem/7.png'),
  require('../GuideElem/8.png'),
  require('../GuideElem/9.png'),
  require('../GuideElem/10.png'),
  require('../GuideElem/11.png'),
  require('../GuideElem/12.png'),
  require('../GuideElem/13.png'),
  require('../GuideElem/14.png'),
  require('../GuideElem/15.png'),
  require('../GuideElem/16.png'),
  require('../GuideElem/17.png'),
  require('../GuideElem/18.png'),
  require('../GuideElem/19.png'),
  require('../GuideElem/20.png'),
  require('../GuideElem/21.png'),
  require('../GuideElem/22.png'),
  require('../GuideElem/23.png'),
  require('../GuideElem/24.png'),
];
export default class GuideConducteur extends Component {
  render() {
    return (
      <ScrollView vertical={true}>
        {IMAGES.map((source, i) => (
          <FitImage
            key={i}
            style={styles.fitImageWithSize}
            hhhhhhh
            resizeMode="contain"
            source={source}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'steelblue',
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height,
    width,
  },
});
