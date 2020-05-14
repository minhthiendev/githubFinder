import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import { SET_LOADING, SEARCH_USERS, CLEAR_USERS, GET_USER } from "../types";

const GithubState = (pros) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };
  //initialize reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({ type: SEARCH_USERS, users: res.data.items })
  }

  // get user
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({ type: GET_USER, user: res.data })
  };

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        alert: state.alert,
        searchUsers, clearUsers, getUser
      }}
    >
      {pros.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
