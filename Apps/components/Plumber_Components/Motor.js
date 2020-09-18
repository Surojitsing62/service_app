import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import motor from '../../Images/plumber_image/motor1.jpg';
import motor2 from '../../Images/plumber_image/motor3.jpg';

import Item from '../Item';
export default class Motor extends Component {
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
          img={motor}
          itemName="Motor Installtion"
          price="499"
          desc="Best suited for installation"
        />
        <Item
          img={motor}
          itemName="Motor Air Cavity Removal"
          price="169"
          desc="Include air cavity removal which is not subject to 30 day warranty"
        />
        <Item
          img={motor2}
          itemName="Washbasin Replacement"
          price="469"
          desc="Exludes masonry work"
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
