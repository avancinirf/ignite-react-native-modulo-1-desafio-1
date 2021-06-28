import React, { useState } from 'react';
import { Image, Keyboard, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

import { theme } from '../global/styles/theme';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkTheme: boolean;
}

export function TodoInput({ addTask, darkTheme }: TodoInputProps) {
  const [task, setTask] = useState('');
  const bdInput = darkTheme ? theme.dark.colors.bdInput : theme.default.colors.bdInput;
  const bgAddButton = darkTheme ? theme.dark.colors.addButton : theme.default.colors.addButton;
  const textInput = darkTheme ? theme.dark.colors.textInput : theme.default.colors.textInput;
  const placeholderInput = darkTheme ? theme.dark.colors.placeholderInput : theme.default.colors.placeholderInput;

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    if (!task) return;
    addTask(task);
    setTask('');
    
  }

  return (
    <View style={[styles.inputContainer, { backgroundColor: bdInput }, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, { backgroundColor: bdInput, color: textInput }]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={placeholderInput}
        returnKeyType="send"
        //TODO - use value, onChangeText and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: bgAddButton }]}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
