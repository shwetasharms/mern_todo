import React, { useEffect, useState } from 'react'
import logo from "../assests/images/heading.svg";
import line from "../assests/images/Line.svg";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import TodoList from './TodoList';
import { getTodo } from '../_services/Todo/getTodo.service';
function TodoComponent() {
    const [todoList, setTodoList] = useState([])
    useEffect(function () {
        getTodo().then(function (response) {
            console.debug("todoList", response)
        }).catch(function (error) {
        });
    },
        [])
    return (
        <div className='container'>
            <div className='container-fluid text-center'>
                <img src={logo} className='mt-5 w-40' />
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
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <Button sx={{ p: '7px' }} aria-label="directions" className='btnBg text-white text-capitalize fst-italic fw-bold px-3'>
                        Add Task
                    </Button>
                </Paper>
                <img src={line} className='w-50 my-3' />
                <TodoList />
            </div>

        </div>
    )
}

export default TodoComponent
