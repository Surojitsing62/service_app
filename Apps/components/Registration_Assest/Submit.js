import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Submit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {backgroundColor: this.props.color, marginVertical: 25},
        ]}>
        <Text style={styles.submitText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: hp('1%'),
  },
  submitText: {
    fontSize: hp('3%'),
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: hp('1%'),
  },
});
