import { createReducer } from '@reduxjs/toolkit';
import tasksAction from '../actions/tasksAction'


const getTasks = (state,action)=>{
    return [...state, action.payload];
}


const tasks = createReducer([],{
    [tasksAction.getAllTasksSuccess]:getTasks,
})


export default {
    tasks
}