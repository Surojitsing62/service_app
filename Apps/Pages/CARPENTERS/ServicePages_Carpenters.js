import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CarpenterPrime from '../../Images/Carpenters/carpnetr2.jpg';
import CarpenterClassic from '../../Images/Carpenters/carpenter4.jpg';

import Service_Cards from '../../components/services_category/Service_Cards';

export default class ServicePages_Carpenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.RootContainer}>
        <View style={styles.HeaderTitleStyle}>
          <Text style={styles.HeaderTextStyle}>Select your prefernce</Text>
        </View>
        {/* service cards***************************************** */}
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Carpenters')}>
          <Service_Cards
            offer={'40% off'}
            ServiceName={'Prime Carpenters'}
            Specalization={'Skilled and verified carpenters'}
            rating={'4.5'}
            years={'4-5'}
            brandName={'Company Name'}
            imgsrc={CarpenterPrime}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Service_Cards
            offer={'50% off'}
            ServiceName={'Classic Carpenters'}
            Specalization={'Skilled and verified cupenters'}
            rating={'3.5'}
            years={'3-4'}
            brandName={'Company Name'}
            imgsrc={CarpenterClassic}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderTitleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: '#c9c9c9',
  },

  HeaderTextStyle: {
    fontSize: hp('3%'),
  },
});
