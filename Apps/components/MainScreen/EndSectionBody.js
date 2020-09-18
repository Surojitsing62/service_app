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

export default class EndSectionBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.MainContain}>
        <View style={styles.Container}>
          <View>
            <Text style={styles.TextTitle} numberOfLines={1}>
              Proud Partners with Govt. of India
            </Text>
          </View>
          <View>
            <Image
              source={require('../../Images/Skill_India_logo.png')}
              style={styles.ImageStyle}
            />
          </View>
        </View>
        <View style={styles.EndText}>
          <View style={styles.TextBox}>
            <Text style={styles.EndTextStyle}>
              Find professionals certified by Govt. of India{'\n'}under Skill
              India Mission
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContain: {
    width: wp('100%'),
    height: hp('38%'),
    backgroundColor: '#ffff',
    marginVertical: hp('2%'),
  },
  Container: {
    height: hp('25%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ImageStyle: {
    width: wp('29%'),
    height: hp('13%'),
    borderRadius: 10,
  },

  TextTitle: {
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
  },
  EndText: {
    height: hp('13%'),
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  EndTextStyle: {
    textAlign: 'center',
    fontSize: hp('2.4%'),
    color: '#fff',
  },
});
