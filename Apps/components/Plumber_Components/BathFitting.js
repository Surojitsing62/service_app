import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import shower from '../../Images/plumber_image/shower_installtion.jpg';
import cellingShower from '../../Images/plumber_image/shower_installtion_celling.jpg';
import wallshower from '../../Images/plumber_image/Bath_Fitting_Installtion.jpg';

import Item from '../Item';
export default class BathFitting extends Component {
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
          img={shower}
          itemName="Bath Fitting Installtion"
          price="99"
          desc="Any one of top or holder"
        />
        <Item
          img={cellingShower}
          itemName="Shower Installtion - Celling Mounted"
          price="169"
          desc="Any one of top or holder"
        />
        <Item
          img={wallshower}
          itemName="Shower Installtion - Wall Mounted"
          price="139"
          desc="Any one of top or holder"
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
