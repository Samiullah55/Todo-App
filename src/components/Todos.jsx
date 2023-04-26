import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Button } from '@mui/material';
import "../css/todo.css";
import { db } from '../firebase';

function Todos(props) {
  return (
    <List className='todo_list'>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.todo}/>
      </ListItem>
      <Button onClick={(e)=>db.collection('Todos').doc(props.todo.id).delete()}>Delete</Button>

    </List>
        
    
  )
}

export default Todos;