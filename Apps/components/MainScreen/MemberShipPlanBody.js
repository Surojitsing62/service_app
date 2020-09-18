import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class MemberShipPlanBody extends Component {
  render() {
    return (
      <View style={styles.MainContain}>
        <View style={styles.TextContain}>
          <Text style={styles.TextTitle} numberOfLines={1}>
            UC Wellness Membership
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            Get 10% OFF on all salon,spa and party makeup services
          </Text>
        </View>
        <View style={styles.ButtonContain}>
          <TouchableOpacity>
            <View style={styles.ButtonViewMebership}>
              <Text style={{color: '#5ad1a7', fontWeight: 'bold'}}>
                View membership plan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContain: {
    width: wp('100%'),
    height: hp('18%'),
    marginTop: hp('2%'),
    paddingHorizontal: hp('2%'),
    backgroundColor: 'rgb(21, 110, 78)',
  },
  TextContain: {
    paddingVertical: hp('2%'),
  },
  ButtonContain: {
    width: wp('45%'),
  },
  TextTitle: {
    fontSize: hp('2.2%'),
    color: '#ffff',
  },
  subTitle: {
    fontSize: hp('1.8%'),
    color: '#ffff',
    // paddingVertical: hp('1%'),
  },
  ButtonViewMebership: {
    width: wp('45%'),
    height: hp('5%'),
    alignItems: 'center',
    // textAlign: 'center',
    borderRadius: 5,
    // borderColor: 'white',
    // borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // olor: '#5ad1a7',
  },
});
