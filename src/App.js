import React,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { FormControl,InputLabel,Input, FormHelperText} from '@mui/material';
import './App.css';
import Todos from './components/Todos';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos,setTodo]=useState(['abc','def']);
  const [input,setInput]=useState('');

  //when the app refresh we need to listen to db
  useEffect(()=>{
    db.collection('Todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data()));
      setTodo(snapshot.docs.map(doc=>doc.data().todo))
      
    })
    
  },[]);

  const addToDo=(e)=>{
    e.preventDefault();
    db.collection('Todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodo([...todos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello Sami Ullah</h1>
      <FormControl>
        <InputLabel>Write to do</InputLabel>
        <Input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <Button disabled={!input} onClick={addToDo} type='submit' variant="contained">Add To Do</Button>
      <ol>
        {todos.map(todo=>(
          <Todos todo={todo}/>
        ))}
      </ol>
    </div>
  );
}

export default App;
