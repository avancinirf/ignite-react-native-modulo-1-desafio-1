import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

import { theme } from '../global/styles/theme';

type Props = TouchableOpacityProps & {
  darkTheme: boolean;
}

export function Theme({ darkTheme, ...rest}: Props) {
  const bg = darkTheme ? theme.dark.colors.bgButtonTheme : theme.default.colors.bgButtonTheme;
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: bg }]}
      {...rest}
    >
      <Text style={styles.text}>Theme</Text>
    </TouchableOpacity>    
  )
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    position: 'absolute',
    top: 50,
    right: 10,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 6,
    alignItems: 'center'
  },
  text: {
    padding: 6,
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold'
  }
})
