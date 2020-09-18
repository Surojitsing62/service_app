import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BodyContainerTop from '../components/MainScreen/BodyContainerTop';
import BodyContainer2 from '../components/MainScreen/BodyContainer2';
import BodyContainer3 from '../components/MainScreen/BodyContainer3';
import BodyContainer4 from '../components/MainScreen/BodyContainer4';
import BodyContainer5 from '../components/MainScreen/BodyContainer5';
import BodyContainer6 from '../components/MainScreen/BodyContainer6';
import BodyContainer7 from '../components/MainScreen/BodyContainer7';
import ReferelBody from '../components/MainScreen/ReferelBody';
import MemberShipPlanBody from '../components/MainScreen/MemberShipPlanBody';
import InsurancePrgramBody from '../components/MainScreen/InsurancePrgramBody';
import EndSectionBody from '../components/MainScreen/EndSectionBody';
import MainScreenHeader from '../components/MainScreen/MainScreenHeader';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContain}>
        {/* Header Place********************************** */}
        <MainScreenHeader />
        {/* Header End*************************************** */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodyContain}>
            <BodyContainerTop />
            <BodyContainer2 />
            <BodyContainer3 />
            <BodyContainer4
              TextTitle="Experiences in the Spotlight"
              SubTitle="Hygienic,Low-Contact Services"
            />
            <BodyContainer5
              TextTitle="Cleaning & Pest Control"
              SubTitle="Remove hard stains & more"
            />
            <BodyContainer6
              TextTitle="Customer safety is our priority"
              SubTitle="What customers are saying about our safety standards"
            />
            <BodyContainer7
              TextTitle="Appliances: Services & Repair"
              SubTitle="Expert technicians at your doorstep in 2 hours"
            />
            <ReferelBody />
            <MemberShipPlanBody />
            <InsurancePrgramBody />
            <EndSectionBody />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContain: {
    flex: 1,
  },
  BodyContain: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
