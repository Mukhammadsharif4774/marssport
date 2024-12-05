import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import MarsSportSportHeader from '../components/MarsSportHeader';
import MarsSportMenuComponent from '../components/MarsSportMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {marrSportProducts} from '../helpers/marrSportProducts';

const categories = [
  {label: 'Классические Торты'},
  {label: 'Десерты и Сладости'},
  {label: 'Фруктовые Торты'},
  {label: 'Напитки'},
];

const OnwSportCategoryButton = ({label, active, onPress}) => (
  <TouchableOpacity onPress={onPress} style={{width: '45%'}}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function MarsSportHomeScreen() {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />

      <Text style={styles.title}>МЕНЮ</Text>

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {marrSportProducts[category].map((product, index) => (
          <MarsSportMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width,
  },
  category: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: COLORS.main,
    paddingVertical: 5,
    borderRadius: 12,
    height: 50,
    verticalAlign: 'middle',
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: COLORS.red,
    paddingVertical: 5,
    borderRadius: 12,
    height: 50,
    verticalAlign: 'middle',
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
});
