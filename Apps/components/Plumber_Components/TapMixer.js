import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import tap from '../../Images/plumber_image/tap_installtion.jpg';
import tap2 from '../../Images/plumber_image/tap_installtion2.jpg';
// import wallshower from '../../Images/plumber_image/Bath_Fitting_Installtion.jpg';

import Item from '../Item';
export default class TapMixer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.RootContain}>
        <View style={styles.HeaderStyle}>
          <Text style={styles.HeaderTextStyle}>{this.props.ServiceName}</Text>
        </View>
        {/* Service Name ........******************************endddddd */}

        {/* ITEM LIST *****************************      */}

        <Item
          img={tap}
          itemName="Hot & Cold Water Mixer Installtion"
          price="450"
          desc="For a faulty Driverter"
        />
        <Item
          img={tap2}
          itemName="Hot & Cold Water Mixer Repair"
          price="216"
          desc="Inastalltion of tap to dummy pipe"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RootContain: {
    flex: 1,
  },
  HeaderStyle: {
    width: wp('100%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingHorizontal: hp('1%'),
  },
  HeaderTextStyle: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
});
