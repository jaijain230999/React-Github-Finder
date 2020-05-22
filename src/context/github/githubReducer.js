import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER
} from '../types'

export default ( state, action ) => {
  switch(action.type){

    case SET_LOADING: 
      return{
        ...state,
        loading: true
      }

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.items,
        searchResult: action.payload.text,
        loading: false
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        user: {},
        repos: [],
        searchResult: null
      }
    
    default: 
      return state
  }
}