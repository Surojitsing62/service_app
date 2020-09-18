import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import door from '../../Images/Carpenters/door.jpg';
// import Door from '../../Images/plumber_image/plumbing.jpg';

import Item from '../Item';
export default class Door extends Component {
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
          img={door}
          itemName="Accessary Installtion"
          price="119"
          desc="Any one of lathc,chain,stopper,magnet"
        />
        <Item
          img={door}
          itemName="Airdrop or door peephole installtion"
          price="169"
          desc="Include repair of either single leg or headboard"
        />
        <Item
          img={door}
          itemName="Door installation"
          price="566"
          desc="For wooden doors only"
        />
        <Item
          img={door}
          itemName="Door Repair"
          price="266"
          desc="wood scraping"
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
