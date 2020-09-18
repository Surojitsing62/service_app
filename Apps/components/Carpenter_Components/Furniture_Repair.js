import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import furniture_repair from '../../Images/Carpenters/carpenter5.jpg';
// import Door from '../../Images/plumber_image/plumbing.jpg';

import Item from '../Item';
export default class Furniture_Repair extends Component {
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
          img={furniture_repair}
          itemName="Furniture Leg Cap Installation"
          price="119"
          desc="Addittional curtain rod brackets"
        />
        <Item
          img={furniture_repair}
          itemName="Table/Chair Wheels fitting"
          price="169"
          desc="Includes fitting of up to 4 wheels"
        />
        <Item
          img={furniture_repair}
          itemName="furniture_repair installtion(Greater than 48 inches"
          price="566"
          desc="Addittional curtain rod brackets"
        />
        {/* <Item
          img={furniture_repair}
          itemName="Door Repair"
          price="266"
          desc="Addittional curtain rod brackets"
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
