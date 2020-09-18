import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ProfileDivisonComponent from '../components/ProfileScreen/ProfileDivisonComponent';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
// import { Image } from 'native-base';

class Bookings extends Component {
  render() {
    return (
      <View style={styles.MainScreen}>
        <View style={styles.HeaderConatiner}>
          <Text style={styles.UserNameText}>My Booking</Text>
        </View>

        {/* Header Conatiner End******************************************** */}

        <View style={styles.UserNamePlace}>
          <View style={styles.SubHeaderPlaceStyle}>
            <Text style={{color: '#fff'}}>ONGOING</Text>
          </View>
          <View style={styles.SubHeaderPlaceStyle}>
            <Text style={{color: '#fff'}}>HISTORY</Text>
          </View>
        </View>

        {/* prodile container**************************************************************** */}

        {/* profile division section************************start*********** */}

        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          decelerationRate={'fast'}
          // scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.MiddleSectionStyle}>
            <View>
              <Image
                resizeMode="cover"
                source={require('../Images/File_Searching.gif')}
                style={styles.GifStyle}
              />
              <View style={styles.TextStyle}>
                <Text style={{fontSize: hp('3%')}}>No active Project</Text>
                <Text>You can start a new project by placing</Text>
                <Text>a request now</Text>
                <View style={styles.BookButtonStyle}>
                  <TouchableOpacity>
                    <Text style={{color: '#fff'}} numberOfLines={1}>
                      Book a Service
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.HistoryBoxStyle}>
              <Image
                resizeMode="contain"
                source={require('../Images/Empty_History.gif')}
                style={styles.GifStyle}
              />
              <View style={styles.TextStyle}>
                <Text style={{fontSize: hp('3%')}}>Whoops, No Projects!</Text>
                <Text>You can start a new project by placing</Text>
                <Text>a request now</Text>
                <View style={styles.BookButtonStyle}>
                  <TouchableOpacity>
                    <Text style={{color: '#fff'}} numberOfLines={1}>
                      Book a Service
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Bookings;

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    backgroundColor: '#fff',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: hp('6%'),
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderColor: '#e9ecf0',
  },
  SubHeaderPlaceStyle: {
    width: wp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6%'),
    borderBottomColor: '#fff',
    borderBottomWidth: 4,
  },
  MiddleSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('2%'),
  },
  GifStyle: {
    width: wp('100%'),
    height: hp('40%'),
  },
  TextStyle: {
    marginVertical: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  BookButtonStyle: {
    width: wp('35%'),
    height: hp('4.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('3%'),
    backgroundColor: 'black',
  },
  HistoryBoxStyle: {
    width: wp('100%'),
    // height: hp('100%'),

    // backgroundColor: 'red',
  },
});
