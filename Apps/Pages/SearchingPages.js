import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class SearchingPages extends Component {
  render() {
    return (
      <View style={styles.headerContain}>
        <View style={styles.textInputfiled}>
          <TextInput
            autoFocus={true}
            placeholder="Search for services and packges"
            style={{
              fontSize: hp('2%'),
              color: 'grey',
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContain: {
    width: wp('100%'),
    height: hp('10%'),
    // backgroundColor: 'black',
    // padding: hp('2%'),

    color: '#fff',
  },
  textInputfiled: {
    // justifyContent: 'flex-end',
    marginVertical: hp('2%'),
    width: wp('100%'),
    height: hp('6%'),
    borderBottomWidth: 1,
    // borderBottomColor:
    paddingHorizontal: hp('6%'),
    backgroundColor: '#fff',
  },
});
