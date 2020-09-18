import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderNameSubService from '../../components/HeaderNameSubService';
import BasinSink from '../../components/Plumber_Components/BasinSink';
import BathFitting from '../../components/Plumber_Components/BathFitting';
import TapMixer from '../../components/Plumber_Components/TapMixer';
import Toilet from '../../components/Plumber_Components/Toilet';
import WaterTank from '../../components/Plumber_Components/WaterTank';
import Motor from '../../components/Plumber_Components/Motor';
export default class AddItemPlumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.HeaderStyle}>
          <ScrollView
            scrollEventThrottle={16}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <HeaderNameSubService
              HeaderBoxName="Basin & Sink"
              width={wp('25%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Bath Fitting"
              width={wp('28%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Tap & Mixer"
              width={wp('25%')}
            />
            <HeaderNameSubService HeaderBoxName="Toilet" width={wp('20%')} />
            <HeaderNameSubService
              HeaderBoxName="Water Tank"
              width={wp('25%')}
            />
            <HeaderNameSubService HeaderBoxName="Motor" width={wp('20%')} />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate={'fast'}
          scrollEventThrottle={16}>
          <View style={styles.BodySectionStyle}>
            <BasinSink ServiceName="Basin & Sink" />
            <BathFitting ServiceName="Bath Fitting" />
            <TapMixer ServiceName="Tap & Mixer" />
            <Toilet ServiceName="Toilet" />
            <WaterTank ServiceName="Water Tank" />
            <Motor ServiceName="Motor" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  HeaderStyle: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('8%'),
    // paddingHorizontal: hp('1%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.7,
    // shadowRadius: 4,
    // elevation: 4,
  },
  BodySectionStyle: {
    flex: 1,
  },
});
