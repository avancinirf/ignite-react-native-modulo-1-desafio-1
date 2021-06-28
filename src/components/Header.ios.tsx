import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../global/styles/theme';

type Props = {
  darkTheme: boolean;
}

export function Header({ darkTheme }: Props) {
  const bg = darkTheme ? theme.dark.colors.bg : theme.default.colors.bg
  return (
    <SafeAreaView style={{ backgroundColor: bg }}>
      <View style={[styles.header, { backgroundColor: bg }]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
    //backgroundColor: '#273FAD',
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
