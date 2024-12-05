import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MarsSportSportHeader from '../components/MarsSportHeader';
import {useNavigation} from '@react-navigation/native';
import Event_1 from '../assets/event_1.png';
import Event_2 from '../assets/event_2.png';
import Event_3 from '../assets/event_3.png';
import Event_4 from '../assets/event_4.png';
import LogoImage from '../assets/logo_image.png';
import Logo from '../assets/logo.png';

const events = [
  {title: 'Мастер-класс', image: Event_4},
  {title: 'Вечер поэзии и десертов', image: Event_1},
  {title: 'Вкусный уикенд', image: Event_2},
  {title: 'В мире футбола', image: Event_3},
];

const EventButton = ({title, image, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(image)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default function () {
  const navigation = useNavigation();

  const handlePress = image => {
    navigation.navigate('DrawerNavigator', {
      screen: 'MarsSportEventDetailScreen',
      params: {image},
    });
  };

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />

      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logo} />
      </View>

      <Image source={Logo} style={styles.logoIcon} />

      <View style={styles.content}>
        {events.map((event, index) => (
          <EventButton
            key={index}
            title={event.title}
            image={event.image}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.main,
  },
  button: {
    justifyContent: 'center',
    width: '85%',
    marginTop: 15,
    backgroundColor: COLORS.main,
    paddingVertical: 12,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 15,
  },
  title: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 15,
  },
  content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    width: width,
    marginTop: '25%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingTop: 40,
    elevation: 5,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    width: width * 0.8,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoIcon: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
