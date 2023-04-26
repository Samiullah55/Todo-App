import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar,Button } from '@mui/material';
import "../css/todo.css";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { db } from '../firebase';

function Todos(props) {
  return (
    <List className='todo_list'>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.todo}/>
      </ListItem>
      <CancelPresentationIcon onClick={()=>db.collection('Todos').doc(props.todo.id).delete()} />

    </List>
        
    
  )
}

export default Todos;