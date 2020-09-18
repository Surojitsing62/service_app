import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.ListItemStyle}>
          <View style={styles.ItemsCardS}>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.ImageStyle}
                source={this.props.img}
                resizeMode="center"
              />
            </View>
            <View>
              <View style={styles.CardDescUpperStyle}>
                <View>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: 'bold',
                      fontSize: hp('1.8%'),
                      width: wp('50%'),
                      // height: hp('5%'),
                    }}>
                    {this.props.itemName}
                  </Text>
                  <Text>${this.props.price}</Text>
                </View>
                <View style={styles.AddCardStyles}>
                  <View style={styles.AddTextBoxStyle}>
                    <Text style={{fontSize: hp('2%')}}>ADD</Text>
                  </View>
                  <View style={styles.PlusSignBoxStyle}>
                    <Text style={{color: '#fff'}}>➕</Text>
                  </View>
                </View>
              </View>
              <View style={styles.CardDescStyle}>
                <View style={styles.FeaturesTextStyle}>
                  <View style={{width: wp('5%')}}>
                    <Text style={{color: '#969595'}}>*</Text>
                  </View>
                  <View style={{width: wp('60%')}}>
                    <Text style={{color: '#969595', fontSize: hp('1.5%')}}>
                      {this.props.desc}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ListItemStyle: {
    width: wp('100%'),
    borderBottomWidth: 1,
    borderColor: '#b5b5b5',
    paddingVertical: hp('2%'),
    backgroundColor: '#ffff',
  },
  ItemsCardS: {
    flex: 1,
    paddingHorizontal: hp('1%'),
    flexDirection: 'row',
  },
  ImageContainer: {
    // paddingHorizontal: hp('1%'),
    width: wp('20%'),
  },
  ImageStyle: {
    width: wp('18%'),
    height: hp('10%'),
    borderRadius: 25,
  },
  CardDescStyle: {
    paddingHorizontal: hp('2%'),
    marginVertical: hp('2%'),
  },
  FeaturesTextStyle: {
    flexDirection: 'row',
    width: wp('65%'),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },

  CardDescUpperStyle: {
    width: wp('78%'),
    height: hp('8%'),
    paddingHorizontal: hp('2%'),
    // backgroundColor: 'red',
    borderBottomWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AddCardStyles: {
    width: wp('18%'),
    height: hp('4%'),
    flexDirection: 'row',
    // paddingHorizontal: hp('1%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#fa610f',
    borderWidth: 1,
  },
  AddTextBoxStyle: {
    width: wp('12%'),
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlusSignBoxStyle: {
    width: wp('6%'),
    height: hp('4%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa610f',
  },
});
