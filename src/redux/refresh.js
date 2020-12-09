import axios from 'axios';
import authAction from './actions/authActions';

export const refreshJWTmiddleware = async (req, refreshToken, dispatch) => {
  const response = await axios(req)
    .then((res) => res)
    .catch(async (err) => {
      if (err.response.status === 401) {
        return;
      }
    });
  if (response) {
    return response.data;
  }

  axios.defaults.headers.common.Authorization = `Bearer ` + refreshToken;
  const tokens = await axios
    .post('http://localhost:1717/api/token/token_refresh/')
    .then((response) => response.data)
    .catch((error) => console.log(error));

  if (tokens) {
    console.log('action');
    dispatch(authAction.loginUserSuccess(tokens));
  }

  req.headers.Authorization = `Bearer ` + tokens.accessToken;
  const result = await axios(req);

  return result.data;
};
