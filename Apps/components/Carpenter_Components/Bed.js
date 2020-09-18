import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import bed from '../../Images/Carpenters/bed.jpg';
// import bed from '../../Images/plumber_image/plumbing.jpg';

import Item from '../Item';
export default class Bed extends Component {
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
          img={bed}
          itemName="Bed Support Repair"
          price="419"
          desc="Include repair of either single leg or headboard"
        />
        <Item
          img={bed}
          itemName="Bed Legs / Headboard Repair"
          price="169"
          desc="Include repair of either single leg or headboard"
        />
        {/* <Item
          img={bed}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable for leakage under basin"
        /> */}
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
