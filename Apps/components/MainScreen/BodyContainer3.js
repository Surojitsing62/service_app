import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import ServiceImagedata from './ServicesImage';

export default class BodyContainer3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: ServiceImagedata,
    };
  }

  Imagelist = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={item.id}>
          <TouchableOpacity
            style={styles.Items}
            onPress={this.getId.bind(this, item)}>
            <Image
              resizeMode="contain"
              source={item.imgsrc}
              style={styles.imageStyles}
            />
            <Text numberOfLines={2} style={styles.textsize}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    });
  };

  getId = (item) => {
    alert(item.id);
  };

  render() {
    return (
      <View style={styles.BodyContain3}>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {this.Imagelist()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain3: {
    marginTop: hp('2%'),
    backgroundColor: '#fff',
    // padding: 2,
  },
  Items: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('24.7%'),
    height: hp('14%'),
    padding: hp('2%'),
    borderWidth: 0.5,
    borderColor: 'rgba(235, 235, 235,0.3)',
  },
  imageStyles: {
    width: wp('9%'),
    height: hp('4.5%'),
  },
  textsize: {
    fontSize: hp('1.5%'),
    padding: hp('0.3%'),

    margin: hp('0.4%'),

    textAlign: 'center',
  },
});
