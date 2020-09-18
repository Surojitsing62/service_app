import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import tv from '../../Images/Carpenters/tv.jpg';
// import Door from '../../Images/plumber_image/plumbing.jpg';

import Item from '../Item';
export default class Tv extends Component {
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
          img={tv}
          itemName="Tv Installtion"
          price="119"
          desc="Include wall  mounting and alignment"
        />
        <Item
          img={tv}
          itemName="Tv Uninstalltion"
          price="169"
          desc="Include wall  mounting and alignment"
        />
        <Item
          img={tv}
          itemName="Tv installtion(Greater than 48 inches"
          price="566"
          desc="Include wall  mounting and alignment"
        />
        <Item
          img={tv}
          itemName="Door Repair"
          price="266"
          desc="Include wall  mounting and alignment"
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
