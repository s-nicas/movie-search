import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=dance&apikey=4a3b711b";
const initialState = {
  loading: true,
  movies: [],
  movie: null,
  errorMessage: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case "SET_CURRENT_MOVIE_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      }; 
    case "SET_CURRENT_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        movie: action.payload
      };  
    case "SET_CURRENT_MOVIE_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };        
    default:
      return state;
  }
};
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);
const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };
const { movies, errorMessage, loading } = state;
return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
export default Home;