import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import img from '../../Images/Carpenters/carpenter6.jpg';
import img2 from '../../Images/Carpenters/bed.jpg';

import Item from '../Item';
export default class Furniture extends Component {
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
          img={img2}
          itemName="Bed Assembly"
          price="119"
          desc="Bunk Bed Assembly at $47"
        />
        <Item
          img={img}
          itemName="Furniture Dismantle"
          price="169"
          desc="Include repair of either single leg or headboard"
        />
        {/* <Item
          img={img}
          itemName="Door installation"
          price="566"
          desc="For wooden doors only"
        />
        <Item
          img={img}
          itemName="Door Repair"
          price="266"
          desc="wood scraping"
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
