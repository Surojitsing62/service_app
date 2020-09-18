import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class TotalPurchaseList extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rootcontainer}>
          <View style={styles.TopSection}>
            <View style={styles.Topcontainer}>
              <View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>Item total</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>Add-on [+]</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>
                    Safety & Convenience fees !
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>$100</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>$400</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>$100</Text>
                </View>
              </View>
            </View>
            <View style={styles.TotalSectionStyle}>
              <Text style={{fontWeight: 'bold'}}>Total</Text>
              <Text style={{fontWeight: 'bold'}}>$600</Text>
            </View>
          </View>
          {/* Bill Section End ************************************* */}
          <View style={styles.CardItem}>
            <View style={styles.CardDescUpperStyle}>
              <View style={styles.ItemNameStyle}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                  }}>
                  Hot & Cold Water Mixer Repair
                </Text>
                <View style={styles.descstyle}>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                </View>
              </View>
              <View style={styles.AddTextBoxStyle}>
                <View style={styles.addButtonStyle}>
                  <View
                    style={[styles.plusButton, {backgroundColor: '#e64809'}]}>
                    <Text style={{fontSize: hp('2%')}}>+</Text>
                  </View>
                  <View style={styles.plusButton}>
                    <Text style={{fontSize: hp('2%')}}>1</Text>
                  </View>
                  <View
                    style={[styles.plusButton, {backgroundColor: '#e64809'}]}>
                    <Text style={{fontSize: hp('2%')}}>-</Text>
                  </View>
                </View>
                <Text style={{fontSize: hp('2%')}}>$248</Text>
              </View>
            </View>
            <View style={styles.CardDescUpperStyle}>
              <View style={styles.ItemNameStyle}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                  }}>
                  Window Installation
                </Text>
                <View style={styles.descstyle}>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                </View>
              </View>
              <View style={styles.AddTextBoxStyle}>
                <View style={styles.addButtonStyle}>
                  <View
                    style={[styles.plusButton, {backgroundColor: '#e64809'}]}>
                    <Text style={{fontSize: hp('2%')}}>+</Text>
                  </View>
                  <View style={styles.plusButton}>
                    <Text style={{fontSize: hp('2%')}}>1</Text>
                  </View>
                  <View
                    style={[styles.plusButton, {backgroundColor: '#e64809'}]}>
                    <Text style={{fontSize: hp('2%')}}>-</Text>
                  </View>
                </View>
                <Text style={{fontSize: hp('2%')}}>$858</Text>
              </View>
            </View>
            <View style={styles.CardDescUpperStyle}>
              <View style={styles.ItemNameStyle}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                  }}>
                  Door Repair
                </Text>
                <View style={styles.descstyle}>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                </View>
              </View>
              <View style={styles.AddTextBoxStyle}>
                <View style={styles.addButtonStyle}>
                  <View
                    style={[styles.plusButton, {backgroundColor: '#e64809'}]}>
                    <Text style={{fontSize: hp('2%')}}>+</Text>
                  </View>
                  <View style={styles.plusButton}>
                    <Text style={{fontSize: hp('2%')}}>1</Text>
                  </View>
                  <View
                    style={[styles.plusButton, {backgroundColor: '#e64809'}]}>
                    <Text style={{fontSize: hp('2%')}}>-</Text>
                  </View>
                </View>
                <Text style={{fontSize: hp('2%')}}>$458</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('25%'),
                // position: 'relative',
                // top: hp('35%'),
              }}>
              <View style={styles.PurchaseButton}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                  }}>
                  Continue Purchase
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
  },
  TopSection: {
    backgroundColor: '#fff',
  },
  Topcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('2%'),
    width: wp('100%'),
    borderBottomWidth: 0.5,
    borderRadius: 20,
    // backgroundColor: 'red',
  },
  textColor: {
    color: '#a8a8a8',
  },
  LeftSideItemStyle: {
    marginVertical: hp('0.5%'),
  },
  TotalSectionStyle: {
    flexDirection: 'row',
    padding: hp('2%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardItem: {
    marginVertical: hp('2%'),
    backgroundColor: '#fff',
  },
  CardDescUpperStyle: {
    padding: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    // paddingHorizontal: hp('2%'),
    // marginVertical: hp('2%'),
  },
  ItemNameStyle: {
    width: wp('60%'),
    // backgroundColor: 'red',
  },
  descstyle: {
    paddingHorizontal: hp('1%'),
  },
  AddTextBoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('25%'),
    height: hp('3%'),
  },
  addButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('16%'),

    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  plusButton: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('5.1%'),
    backgroundColor: '#fff',
  },
  PurchaseButton: {
    // paddingHorizontal: hp('2%'),
    width: wp('90%'),
    height: hp('5%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54b5ff',
    borderWidth: 1,
  },
});
