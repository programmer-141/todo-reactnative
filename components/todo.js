import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text, View,  TextInput} from 'react-native';

export default function Todos (props) {
  return(
      <Text style={styles.text}>{props.todo}</Text>
  )
}

const styles = StyleSheet.create({
  
})