import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://backend-foodie-fun.herokuapp.com/api/auth/login', credentials)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.payload
    }))
    .catch(err => dispatch({
      type: LOGIN_FAIL,
      payload: err
    }))
}

export const getMeal = () => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .get('https://backend-foodie-fun.herokuapp.com/api/meals/')
    .then(res => {
      console.log('get: ', res)
      dispatch({
        type: FETCH_MEALS_SUCCESS,
        payload: res.data
      })
        .catch(err => dispatch({
          type: ERROR,
          payload: err
        }))
    })
}