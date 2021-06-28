import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { theme } from '../global/styles/theme';

type Props = {
  darkTheme: boolean;
}

export function Header({ darkTheme }: Props) {
  const bg = darkTheme ? theme.dark.colors.bg : theme.default.colors.bg;

  return (
    <View style={[styles.header, { backgroundColor: bg }]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
