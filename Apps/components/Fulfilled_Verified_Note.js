import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Fulfilled_Verified_Note extends Component {
  render() {
    return (
      <View style={styles.MainConatin}>
        <View style={styles.SectionHeader}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: hp('2.5%'),
              fontStyle: 'italic',
            }}>
            Fulfilled
          </Text>
        </View>

        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image resizeMode="center" source={require('../Images/user.png')} />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text>Skiled and verified plumbers</Text>
          </View>
        </View>
        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image
              source={require('../Images/month.png')}
              resizeMode="center"
            />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text>30-Day service guarantee</Text>
          </View>
        </View>
        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image
              source={require('../Images/rupee.png')}
              resizeMode="center"
            />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text>$100 damage cover on every booking</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainConatin: {
    width: wp('100%'),
    height: hp('25%'),
    marginTop: hp('2%'),
    padding: hp('2.5%'),
    backgroundColor: '#fff',
  },
  SectionHeader: {
    width: wp('25%'),
    height: hp('4%'),
    paddingHorizontal: hp('2%'),
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ff6b21',
    borderTopLeftRadius: 45,
    borderBottomRightRadius: 45,
    shadowRadius: 2,
    shadowOpacity: 0.7,
    shadowOffset: {width: 0, height: 4},
    shadowColor: '#0000',
    elevation: 5,
  },
  TextRowOfBody: {
    flexDirection: 'row',
    paddingVertical: hp('1.5%'),
    justifyContent: 'flex-start',
  },
  IconStyle: {
    width: wp('8%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
