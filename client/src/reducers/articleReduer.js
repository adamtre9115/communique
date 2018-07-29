import {
  FETCH_TRENDING,
  FETCH_BUSINESS,
  FETCH_ENT,
  FETCH_HEALTH,
  FETCH_SPORTS,
  FETCH_TECH,
  SAVE_ARTICLE,
  REMOVE_ARTICLE
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
      case REMOVE_ARTICLE:
        const articleId = action.payload
        // filter state to remove deleted article
        const result = state.savedArticles.filter(articles => articles._id !== articleId)
        return {
          ...state,
          savedArticles: result
        }
    default:
      return state;
  }
}
