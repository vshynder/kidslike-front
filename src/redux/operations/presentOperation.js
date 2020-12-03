import axios from 'axios';
import action from '../actions/presentAction'


const setAuthToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const addPresent = ({title,reward,childId}) => (dispatch,getState) => {
  const {
        user: { accessToken: acToken },
      } = getState();
      if (!acToken) {
        return;
      };


    console.log(title,reward,childId);

    setAuthToken(acToken);
    dispatch(action.addPresentRequest());

    axios.post('https://kidslike-back-end.herokuapp.com/api/presents/', {title ,reward ,childId})
    .then(res => {
        dispatch(action.addPresentSuccess(res.data));
    })
    .catch(error => dispatch(action.addPresentError(error)));
};

const updatePresent = ({title,bal,childId}) => dispatch =>{
    dispatch(action.updatePresentRequest());

    axios.patch('kidslike-back-end.herokuapp.com/api/presents/update', {title,bal,childId}) ///  заглушка на end point 
        .then(res => {
            dispatch(action.updatePresentSuccess(res.data));
        })
        .catch(error => dispatch(action.updatePresentError(error)));
}


const removePresent = id => dispatch => {
    dispatch(action.removePresentRequest());
    axios.delete(`kidslike-back-end.herokuapp.com/api/presents/${id}`)// временна заглушка .. передаем id present для удаления 
    .then(()=>dispatch(action.removePresentSuccess(id)))
    .catch(error => dispatch(action.removePresentError(error)))
}


export default {
    addPresent,
    updatePresent,
    removePresent
}