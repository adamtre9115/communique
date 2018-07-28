import {
  FETCH_TRENDING,
  FETCH_BUSINESS,
  FETCH_ENT,
  FETCH_HEALTH,
  FETCH_SPORTS,
  FETCH_TECH,
  SAVE_ARTICLE
} from "../actions/types";

const initialState = {
  articles: [],
  savedArticles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_BUSINESS:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_ENT:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_HEALTH:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_SPORTS:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_TECH:
      return {
        ...state,
        articles: action.payload
      };
      case SAVE_ARTICLE:
      return {
        ...state,
        savedArticles: action.payload
      }
    default:
      return state;
  }
}
