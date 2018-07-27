import Axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_USER
} from "./types";

// register new users
export const registerUser = (oktaAuth, data) => dispatch => {
  Axios.post("/api/register", data)
    .then(() => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: null
      });
      dispatch(loginUser(oktaAuth, data.email, data.password));
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.message
      });
    });
};

// user login
export const loginUser = (oktaAuth, username, password) => dispatch => {
  oktaAuth
    .signIn({
      username: username,
      password: password
    })
    .then(res => {
        console.log(JSON.stringify(res));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.sessionToken
          })
    }).catch(err => {
        console.log(err.message + '\n error', err);
        dispatch({
            type: LOGIN_FAILURE,
            payload: err.message
        });
    });
};

// save logged in user to state
export const fetchUser = (user) => dispatch => {
  console.log(user)
  dispatch({
    type: FETCH_USER,
    payload: user
  })
}
