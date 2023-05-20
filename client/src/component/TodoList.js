import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import DirectionsIcon from '@mui/icons-material/Directions';
function TodoList() {
    return (
        <div>
            <Paper
                component="form"
                sx={{ display: 'flex', width: 500 }}
                className="mx-auto mt-5"
            >
                <InputBase
                    sx={{ ml: 2, flex: 1 }}
                    placeholder="Enter something..."
                    inputProps={{ 'aria-label': 'Enter something...' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className='bg-dark' />
                <IconButton sx={{ p: '7px' }} aria-label="directions" >
                    <EditIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className='bg-dark' />
                <IconButton sx={{ p: '7px' }} aria-label="directions" >
                    <DeleteIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

export default TodoList
