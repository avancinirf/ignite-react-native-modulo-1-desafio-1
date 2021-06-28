import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { Theme } from '../components/Theme';
import { View, StyleSheet } from 'react-native';

import { theme } from '../global/styles/theme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const tasksBg = darkTheme ? theme.dark.colors.tasksBg : theme.default.colors.tasksBg

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty    
    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldTasks => [...oldTasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists    
    setTasks(oldState => { 
      let newState:Task[] = [];
      oldState.forEach(e => {
        if (e.id === id) e.done = !e.done
        newState.push(e); 
      });
      console.log(newState);
      return newState;
    })
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(e => e.id !== id));
  }

  function handleToggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <View style={[styles.container, { backgroundColor: tasksBg }]}>
      <Header darkTheme={darkTheme} />
      <Theme onPress={handleToggleTheme} darkTheme={darkTheme}/>
      <TodoInput addTask={handleAddTask} darkTheme={darkTheme}/>

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        darkTheme={darkTheme}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
