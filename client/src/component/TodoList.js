import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo } from '../_services/Todo';

function TodoList(props) {
    console.debug("propsssssssss", props)
    function onDeleteHandler(id) {
        deleteTodo(id).then(function (response) {
        }).catch(function (error) {
        });
    }
    return (
        <Paper
            component="form"
            sx={{ display: 'flex', width: 500 }}
            className="mx-auto mt-3"
        >
            <InputBase
                sx={{ ml: 2, flex: 1 }}
                value={props.data.title}
                placeholder="Enter something..."
                inputProps={{ 'aria-label': 'Enter something...' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className='bg-dark' />
            <IconButton sx={{ p: '7px' }} aria-label="directions" >
                <EditIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className='bg-dark' />
            <IconButton sx={{ p: '7px' }} aria-label="directions" >
                <DeleteIcon onClick={() => onDeleteHandler(props.data._id)} />
            </IconButton>
        </Paper>
    )
}

export default TodoList
