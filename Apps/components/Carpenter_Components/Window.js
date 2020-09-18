import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import window from '../../Images/Carpenters/window.jpg';
// import Door from '../../Images/plumber_image/plumbing.jpg';

import Item from '../Item';
export default class Window extends Component {
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
          img={window}
          itemName="Motorized Blinds fitting"
          price="119"
          desc="Addittional curtain rod brackets"
        />
        <Item
          img={window}
          itemName="Non Motorized Blinds fitting"
          price="169"
          desc="Addittional curtain rod brackets"
        />
        <Item
          img={window}
          itemName="window installtion(Greater than 48 inches"
          price="566"
          desc="Addittional curtain rod brackets"
        />
        <Item
          img={window}
          itemName="window installtion(Greater than 48 inches"
          price="566"
          desc="Addittional curtain rod brackets"
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
