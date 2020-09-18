import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderNameSubService from '../../components/HeaderNameSubService';
import Bed from '../../components/Carpenter_Components/Bed';
import Door from '../../components/Carpenter_Components/Door';
import Furniture from '../../components/Carpenter_Components/Furniture';
import Tv from '../../components/Carpenter_Components/Tv';
import Furniture_Repair from '../../components/Carpenter_Components/Furniture_Repair';
import Window from '../../components/Carpenter_Components/Window';
export default class AddItemCarpenter extends Component {
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
            <HeaderNameSubService HeaderBoxName="Bed" width={wp('20%')} />
            <HeaderNameSubService HeaderBoxName="Door" width={wp('25%')} />
            <HeaderNameSubService
              HeaderBoxName="Furniture Repair"
              width={wp('32%')}
            />
            <HeaderNameSubService HeaderBoxName="Tv" width={wp('18%')} />
            <HeaderNameSubService
              HeaderBoxName="Furniture Assembly"
              width={wp('35%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Window & Curtain"
              width={wp('35%')}
            />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate={'fast'}
          scrollEventThrottle={16}>
          <View style={styles.BodySectionStyle}>
            <Bed ServiceName="Bed" />
            <Door ServiceName="Door" />
            <Furniture ServiceName="Furniture Repair" />
            <Tv ServiceName="Tv" />
            <Furniture_Repair ServiceName="Furniture Assembly" />
            <Window ServiceName="Window & Curtain" />
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
    borderBottomWidth: 0.5,
    borderColor: 'grey',
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
