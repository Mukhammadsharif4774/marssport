import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import MarsSportSportHeader from '../components/MarsSportHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.matchTime}>{time}</Text>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MarsSportSportHeader />
      <Text style={styles.header}>Спортивные трансляции</Text>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100}}>
        {renderBroadcast(
          'UEFA',
          '12.06 00:45',
          'Bayern Munich\n' + 'Real Madrid',
        )}
        {renderBroadcast(
          'CFL',
          '20.06 00:30',
          'Colorado Mammoth\n' + 'Calgary Roughnecks',
        )}
        {renderBroadcast(
          'NLL',
          '25.06 00:00',
          'Hamilton Tiger-Cats\n' + 'Montreal Alouettes',
        )}
        {renderBroadcast(
          'AFL',
          '30.06 00:55',
          'Adelaide Crows\n' + 'Melbourne Demons',
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  header: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
  },
  league: {
    fontSize: 44,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.main,
    borderRadius: 25,
    width: 150,
    textAlign: 'center',
    height: 80,
    verticalAlign: 'middle',
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leagueContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 130,
  },
  teamsContainer: {
    width: '60%',
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    backgroundColor: COLORS.main,
    borderRadius: 25,
    textAlign: 'center',
    width: '60%',
    paddingVertical: 5,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
  },
});
