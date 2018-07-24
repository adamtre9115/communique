import { combineReducers } from 'redux';
import articleReducer from './articleReduer';
import authReducer from './authReducer'

export default combineReducers({
    articles: articleReducer,
    authentication: authReducer
})