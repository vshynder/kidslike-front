import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import taskAction from '../actions/taskAction'

const task = [
    {
        id: "5fc2b49f7ab5afb71390f546",
        isCompleted: "active",
        title: "eat pizza",
        reward: 10,
        daysToDo: 2,
        startDay: "2020-11-28T20:35:43.179Z",
        finishDay: "2020-11-30T20:35:43.179Z",
        childId:  "5fc2b3af43def7b68ce8add0",
    },
]



const updateTask = (state,action) => {
    return [...state, action.payload]
};

const tasks = createReducer(task,{
    [taskAction.updateTaskSuccess]:updateTask,
});

export default combineReducers ({
    tasks
})