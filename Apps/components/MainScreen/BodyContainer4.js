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
import ViewBotton from './ViewBotton';
import ImageListByHorizontalScroll from '../BannerImage_Horizontal/ImageListByHorizontalScroll';

export default class BodyContainer4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.BodyContain4}>
        <View style={styles.textcontainer}>
          <Text style={styles.TextTitle}>{this.props.TextTitle}</Text>
          <Text style={styles.subTitle}>{this.props.SubTitle}</Text>
        </View>
        <ImageListByHorizontalScroll />
        <TouchableOpacity>
          <ViewBotton />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain4: {
    width: wp('100%'),
    height: hp('50%'),
    marginTop: hp('2%'),
    backgroundColor: '#ffff',
  },
  textcontainer: {
    padding: hp('2%'),
  },
  TextTitle: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: hp('1.8%'),
    color: '#969696',
    marginVertical: hp('0.8%'),
  },
});
