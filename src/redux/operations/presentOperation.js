import axios from 'axios';
import action from '../actions/presentAction'


const addPresent = ({title,bal,childId}) => dispatch => {
    dispatch(action.addPresentRequest());

    axios.post('http://localhost:1717/api/presents/addPresent', {title ,bal ,childId})
    .then(res => {
        dispatch(action.addPresentSuccess(res.data));
    })
    .catch(error => dispatch(action.addPresentError(error)));
};

const updatePresent = ({title,bal,childId}) => dispatch =>{
    dispatch(action.updatePresentRequest());

    axios.patch('http://localhost:1717/api/presents/update', {title,bal,childId}) ///  заглушка на end point 
        .then(res => {
            dispatch(action.updatePresentSuccess(res.data));
        })
        .catch(error => dispatch(action.updatePresentError(error)));
}


const removePresent = id => dispatch => {
    dispatch(action.removePresentRequest());
    axios.delete(`http://localhost:1717/api/presents/${id}`)// временна заглушка .. передаем id present для удаления 
    .then(()=>dispatch(action.removePresentSuccess(id)))
    .catch(error => dispatch(action.removePresentError(error)))
}


export default {
    addPresent,
    updatePresent,
    removePresent
}