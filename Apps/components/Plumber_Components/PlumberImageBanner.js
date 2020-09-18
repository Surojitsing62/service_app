import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import ImageData from '../../Images/plumber_image/PlumberImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class PlumberImageBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: ImageData,
    };
  }
  getImage = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={item.id}>
          <View>
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
          </View>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={styles.cardsimage}>{this.getImage()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardsimage: {
    // height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp('1.5%'),
  },
});
