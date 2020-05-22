import React, { useReducer, useCallback } from 'react'
import GithubContext from './GithubContext'
import GithubReducer from './githubReducer'
import axios from 'axios'

import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from '../types'

const initialState = {
  users: [],
  user: {},
  repos: [],
  searchResult: null,
  loading: false,
}

// eslint-disable-next-line no-unused-vars
let githubClientID;
// eslint-disable-next-line no-unused-vars
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props => {

  const [ state, dispatch ] = useReducer(GithubReducer, initialState)
  
  //SetLoading
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setLoading = useCallback(() => dispatch({ type: SET_LOADING }))

  //Search Github Users
  const searchUsers = useCallback(async text => {
    try {
      setLoading()
      const { data: { items }} = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`)
      dispatch({
        type: SEARCH_USERS,
        payload: { items, text }
      })
    } catch (err) {
      console.log("searchUsers -> err", err)
    }
  }, [setLoading])

  //Get Single Github User
  const getSingleUser = useCallback(async username => {
    try {
      setLoading()
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`)
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    } catch (err) {
      console.log("getSingleUser -> err", err)
    }
  }, [setLoading])

  //Get User's Repositories
  const getUserRepos = useCallback(async username => {
    try {
      setLoading()
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`)
      dispatch({
        type: GET_REPOS,
        payload: res.data
      })
    } catch (err) {
    console.log("getUserRepos -> err", err)
    }
  }, [setLoading])

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  return (
    <GithubContext.Provider 
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchResult: state.searchResult,
        setLoading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState

