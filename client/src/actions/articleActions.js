import Axios from 'axios';
import {
  FETCH_TRENDING,
  FETCH_BUSINESS,
  FETCH_ENT,
  FETCH_HEALTH,
  FETCH_SPORTS,
  FETCH_TECH,
  SAVE_ARTICLE,
  REMOVE_ARTICLE
} from "./types";

export const fetchTrending = () => dispatch => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15")
    .then(articles =>
      // console.log(articles)
      dispatch({
        type: FETCH_TRENDING,
        payload: articles.data.articles
      })
    )
    .catch(err => console.log('fetch tech error: ' + err));
}

export const fetchBusiness = () => dispatch => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15")
    .then(articles => {
      dispatch({
        type: FETCH_BUSINESS,
        payload: articles.data.articles
      })
    })
    .catch(err => console.log('fetch business error' + err));
};

export const fetchEnt = () => dispatch => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15")
    .then(articles =>
      dispatch({
        type: FETCH_ENT,
        payload: articles.data.articles
      })
    )
    .catch(err => console.log('fetch entertainment error' + err));
};

export const fetchHealth = () => dispatch => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15")
    .then(articles =>
      dispatch({
        type: FETCH_HEALTH,
        payload: articles.data.articles
      })
    )
    .catch(err => console.log('fetch health error' + err ));
};

export const fetchSports = () => dispatch => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15")
    .then(articles =>
      dispatch({
        type: FETCH_SPORTS,
        payload: articles.data.articles
      })
    )
    .catch(err => console.log('fetch sports error' + err));
};

export const fetchTech = () => dispatch => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15")
    .then(articles =>
      dispatch({
        type: FETCH_TECH,
        payload: articles.data.articles
      })
    )
    .catch(err => console.log('fetch tech error: ' + err));
};

export const fetchSaved = (user) => dispatch => {
  let email = {
    userName: user
  }
  return Axios.post('/api/users/retrieve', email)
    .then(res => {
      dispatch({
        type: SAVE_ARTICLE,
        payload: res.data.articles
      })
    })
    .catch(err => console.log('fetch saved error: '+ err))
}
// save user selected article to database and state
export const saveArticle = (data) => dispatch => {
  Axios.post('/api/users/save', data)
}

export const removeSaved = (id) => dispatch => {
  let article = {
    articleId: id
  }

 return Axios.post('/api/users/remove', article)
  .then(removed => {
    dispatch({
      type: REMOVE_ARTICLE,
      payload: removed.data.msg._id
    })
  })
  .catch(err => console.log('remove saved error: ' + err))
}