import React from 'react'
import { List,ListItem,ListItemText,ListItemAvatar } from '@mui/material';
import "../css/todo.css";


function Todos(props) {
  return (
    <List className='todo_list'>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary="Todo" secondary={props.todo}/>
      </ListItem>

    </List>
        
    
  )
}

export default Todos;