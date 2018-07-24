import {
  FETCH_TRENDING,
  FETCH_BUSINESS,
  FETCH_ENT,
  FETCH_HEALTH,
  FETCH_SPORTS,
  FETCH_TECH
} from "./types";

export const fetchTrending = () => dispatch => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15"
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_TRENDING,
        payload: articles.articles
      })
    )
    .catch(err => console.log(err));
};

export const fetchBusiness = () => dispatch => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15"
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_BUSINESS,
        payload: articles.articles
      })
    )
    .catch(err => console.log(err));
};

export const fetchEnt = () => dispatch => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15"
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_ENT,
        payload: articles.articles
      })
    )
    .catch(err => console.log(err));
};

export const fetchHealth = () => dispatch => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15"
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_HEALTH,
        payload: articles.articles
      })
    )
    .catch(err => console.log(err));
};

export const fetchSports = () => dispatch => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15"
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_SPORTS,
        payload: articles.articles
      })
    )
    .catch(err => console.log(err));
};

export const fetchTech = () => dispatch => {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=492120c3e05b4d53b3d159981340be9a&pageSize=15"
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: FETCH_TECH,
        payload: articles.articles
      })
    )
    .catch(err => console.log(err));
};
