import {createSlice} from '@reduxjs/toolkit'

createSlice({
    name: 'task',
    initialState: {title: '', id: Math.random().toString()},
    reducers: {
        addTask(state) {
            
        }
    }

})