import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import MarsSportSportHeader from '../components/MarsSportHeader';
import MarsSportButtonComponent from '../components/MarsSportButtonComponent';
import Icon from '../assets/reserve_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'MarsSportHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />

      <Text style={styles.text}>
        СТОЛИК {'\n'}
        ЗАРЕЗЕРВИРОВАН!
      </Text>

      <Image
        source={Icon}
        style={{
          width: width * 0.35,
          height: width * 0.35,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />

      <MarsSportButtonComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
    backgroundColor: COLORS.main,
    paddingVertical: 40,
  },
});
