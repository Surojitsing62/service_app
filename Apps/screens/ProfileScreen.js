import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ProfileDivisonComponent from '../components/ProfileScreen/ProfileDivisonComponent';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.MainScreen}>
        <View style={styles.HeaderConatiner}>
          <Text style={styles.UserNameText}>My Profile</Text>
        </View>

        {/* Header Conatiner End******************************************** */}

        <View style={styles.UserNamePlace}>
          <View style={styles.imagesection}>
            <View style={styles.ProfileImage}>
              <Text style={{fontSize: hp('2.5%'), color: 'white'}}>U</Text>
            </View>
            <View style={styles.NameSection}>
              <Text
                numberOfLines={2}
                style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                User
              </Text>
              <Text>Your Name</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.EditBtn}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>EDIT</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* prodile container**************************************************************** */}

        {/* profile division section************************start*********** */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodyBannerContainer}>
            <ProfileDivisonComponent
              IconName="rocketchat"
              Title="Help Center"
            />
            <ProfileDivisonComponent
              IconName="handshake"
              Title="Download UC Partner app"
            />
            <ProfileDivisonComponent
              IconName="smile"
              Title="About Urban Company"
            />
            <ProfileDivisonComponent
              IconName="telegram-plane"
              Title="Share Urban Company"
            />
            <ProfileDivisonComponent IconName="gift" Title="My Gift Cards" />
            <ProfileDivisonComponent IconName="wallet" Title="My Wallet" />
            <ProfileDivisonComponent
              IconName="wallet"
              Title="My Scheduled Bookings"
            />
            <ProfileDivisonComponent
              IconName="star"
              Title="Rate Urban Comapany"
            />
            <ProfileDivisonComponent
              IconName="money-check-alt"
              Title="Payment Options"
            />
            <ProfileDivisonComponent IconName="whmcs" Title="Setting" />
            <View style={styles.EndSection}>
              <TouchableOpacity>
                <Text style={{color: 'red', fontSize: hp('2%')}}>Logout</Text>
              </TouchableOpacity>
              <View style={styles.VersionSection}>
                <Text style={{color: '#bdbdbd'}} numberOfLines={2}>
                  Version 1.0.2
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
  },
  HeaderConatiner: {
    width: wp('100%'),
    height: hp('6%'),
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: hp('2.5%'),
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(21, 17, 51,0.4)',
  },

  UserNameText: {
    color: '#fff',
    fontSize: hp('2.5% '),
  },

  UserNamePlace: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: hp('12%'),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e9ecf0',
  },
  imagesection: {
    width: wp('70%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  NameSection: {
    width: wp('30%'),
    position: 'absolute',
    left: wp('20%'),
  },
  ProfileImage: {
    width: wp('15%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    backgroundColor: 'rgba(10, 117, 209,0.9)',
  },

  EditBtn: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: 30,
    borderColor: '#fc560f',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BodyBannerContainer: {
    flex: 1,
    marginVertical: hp('1%'),
  },
  EndSection: {
    marginVertical: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  VersionSection: {
    marginVertical: hp('0.5%'),
    width: wp('30%'),
    height: hp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
});
