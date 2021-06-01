import React, {useState} from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text, View,  TextInput, ScrollView} from 'react-native';
import Todos from './components/todo';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  const inputHandler = () => {
    setTodos([...todos, input]);
    setInput(null);
  }
  const delTodo = (index) => {
    let list = [...todos];
    list.splice(index, 1);
    setTodos(list)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Honey Todo List</Text>
      <View style={styles.todoBox}>
        <ScrollView contentContainerStyles={styles.todoscontainer}>
          {
            todos.map((todo, index) => {
              return(
              <TouchableOpacity style={styles.todo} key ={index} onPress={() => delTodo(index)}>
                <Todos todo={todo}/>
              </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      <View style={styles.inputwrapper}>
        <TextInput style={styles.input} value={input} onChangeText={text => setInput(text)} />
        <TouchableOpacity style={styles.btn} onPress={
          () => {inputHandler()}
        }>
          <Text style={styles.btntext}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a1b',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'column',
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  todoscontainer:{
    flex:2,
    width:380,
    display:'flex',
    alignItems: "center",
    justifyContent: "flex-start",
    overflow:'visible',
    backgroundColor:'transparent'
  },
  todo:{
    width:320,
    height:60,
    padding:10,
    backgroundColor:'#e3e1e1',
    marginVertical:10,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
  },
  todoBox:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'90%',
  },
  text:{
    width:'90%',
    backgroundColor:'transparent',
    marginTop:35,
    height:40,
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  btntext:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  inputwrapper:{
    width:'100%',
    justifyContent: 'space-evenly',
    backgroundColor:'#191a1b',
    alignItems: 'center',
    marginVertical:20,
    height:50,
    flexDirection:'row',
  },
  input:{
    width:'75%',
    height:40,
    backgroundColor:'#e3e1e1',
    borderRadius:60,
    padding:10,
    color:'black',
    fontWeight:'bold',
    letterSpacing:.5
  },
  btn:{
    width:40,
    height:40,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightgrey',
    
  },
});
