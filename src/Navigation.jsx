import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import MarsSportHomeScreen from './pages/MarsSportHomeScreen';
import MarsSportCartScreen from './pages/MarsSportCartScreen';
import MarsSportCartSuccessScreen from './pages/MarsSportCartSuccessScreen';
import MarsSportReservationScreen from './pages/MarsSportReservationScreen';
import MarsSportReservationSuccessScreen from './pages/MarsSportReserveSuccessScreen';
import MarsSportContactsScreen from './pages/MarsSportContactsScreen';
import MarsSportEventsScreen from './pages/MarsSportEventsScreen';
import MarsSportEventDetailScreen from './pages/MarsSportEventDetailScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import LogoImage from './assets/logo_image.png';
import MarsSportTranslationsScreen from './pages/MarsSportTranslationsScreen';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.main,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'MarsSportHomeScreen'},
    {label: 'КОРЗИНА', screen: 'MarsSportCartScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'MarsSportTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'MarsSportContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'MarsSportReservationScreen'},
    {label: 'СОБЫТИЯ', screen: 'MarsSportEventsScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logo} />
      </View>

      <Image source={Logo} style={styles.logoIcon} />

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={
              screen === 'MarsSportHomeScreen'
                ? styles.drawerItemFirst
                : styles.drawerItem
            }>
            <Text
              style={
                screen === 'MarsSportHomeScreen'
                  ? styles.itemTextFirst
                  : styles.itemText
              }>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('MarsSportCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}

const drawerScreens = [
  {name: 'MarsSportHomeScreen', component: MarsSportHomeScreen},
  {name: 'MarsSportCartScreen', component: MarsSportCartScreen},
  {name: 'MarsSportCartSuccessScreen', component: MarsSportCartSuccessScreen},
  {name: 'MarsSportReservationScreen', component: MarsSportReservationScreen},
  {
    name: 'MarsSportReservationSuccessScreen',
    component: MarsSportReservationSuccessScreen,
  },
  {name: 'MarsSportContactsScreen', component: MarsSportContactsScreen},
  {name: 'MarsSportEventsScreen', component: MarsSportEventsScreen},
  {name: 'MarsSportEventDetailScreen', component: MarsSportEventDetailScreen},
  {name: 'MarsSportTranslationsScreen', component: MarsSportTranslationsScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
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
  mainContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: width,
  },
  drawerItemFirst: {
    justifyContent: 'center',
    width: '85%',
    marginTop: 15,
    backgroundColor: COLORS.red,
    paddingVertical: 12,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 15,
  },
  drawerItem: {
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
  itemText: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 15,
  },
  itemTextFirst: {
    fontSize: 23,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    paddingLeft: 15,
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
