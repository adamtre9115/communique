import { FETCH_USER, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
    sessionToken: null,
    error: null,
    user: null
  };

export default function(state =  initialState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                error: action.payload
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                sessionToken: action.payload
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case FETCH_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default :
            return state
    }
}