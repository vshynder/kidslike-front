import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import presentAction from '../actions/presentAction'

const present = [
    {
        _id:'5fb51b0126db0d0eab59dac6',
        title:'Car',
        childId:'5fb4d5e72d6d062db842e34f',
        bal:5,
        dateCreated:'2020-11-18T13:00:49.574+00:00'
    },
    {
        _id:'5fb51b0126db0d0eab5asdf3',
        title:'Dog',
        childId:'5fb4d5e72d6d062db842e34f',
        bal:100,
        dateCreated:'2020-11-18T13:00:49.574+00:00'
    }
]


const newPresent = (state,action) => {
    return [...state, action.payload]
};

const removePresent = (state,action) => {
    return state.filter(present => present._id !== action.payload);
};

const updatePresent = (state,action) => {
    return [...state, action.payload]
};

const presents = createReducer(present,{
    [presentAction.addPresentSuccess]:newPresent,
    [presentAction.removePresentSuccess]:removePresent,
    [presentAction.updatePresentSuccess]:updatePresent,
});

export default combineReducers ({
    presents
})