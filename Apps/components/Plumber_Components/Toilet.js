import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import toilet from '../../Images/plumber_image/Toilet2.jpg';
import toilet2 from '../../Images/plumber_image/toilet.jpg';

import Item from '../Item';
export default class Toilet extends Component {
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
          img={toilet}
          itemName="Western Toilet Installtion(Floor Mounted)"
          price="1,499"
          desc="Best suited for installation"
        />
        <Item
          img={toilet}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable Inastalltion"
        />
        <Item
          img={toilet2}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable Inastalltion"
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
