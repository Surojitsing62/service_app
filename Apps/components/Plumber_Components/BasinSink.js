import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import basin from '../../Images/plumber_image/basin&shink2.jpg';
import Washbasin from '../../Images/plumber_image/plumbing.jpg';

import Item from '../Item';
export default class BasinSink extends Component {
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
          img={basin}
          itemName="Bath & Sink"
          price="199"
          desc="Best suited for installation or Leakage"
        />
        <Item
          img={Washbasin}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable for leakage under basin"
        />
        <Item
          img={Washbasin}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable for leakage under basin"
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
