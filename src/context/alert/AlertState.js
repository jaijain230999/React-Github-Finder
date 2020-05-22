import React, { useReducer } from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './alertReducer'

import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const initialState = null

const AlertState = props => {

  //Set Alert
  const setAlert = ( msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    })
    //Remove Alert after 3secs
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000)
  }

  const [ state, dispatch ] = useReducer(AlertReducer, initialState)
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState