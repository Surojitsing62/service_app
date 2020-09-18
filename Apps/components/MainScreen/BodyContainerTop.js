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
  ScrollView,
  FlatList,
  TouchableHighlightComponent,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import images from '../BannerImage_Horizontal/Images';

export default class BodyContainerTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: images,
    };
  }

  getImage = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={item.id}>
          <Image
            resizeMode="cover"
            source={item.imgsrc}
            style={{
              width: wp('85%'),
              height: hp('25%'),
              borderRadius: 5,
              marginHorizontal: hp('1%'),
            }}
          />
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <View style={styles.BodyContain}>
        <ScrollView
          autoplay={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}>
          <View style={styles.cardsimage}>{this.getImage()}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain: {
    width: wp('100%'),
    height: hp('28%'),
    backgroundColor: '#fff',
  },

  cardsimage: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp('1.5%'),
  },
});
