import React, { useState, useContext } from 'react'

import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext' 

const Search = () => {

  const githubContext = useContext(GithubContext)
  const { searchUsers, clearUsers, users } = githubContext

  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  const [ searchText, setSearchText ] = useState('')

  const onChange = (e) => setSearchText(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    if(searchText === '') {
      setAlert('Please Provide an Input', 'danger')
    } else {
      searchUsers(searchText)
      setSearchText('')
    }
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input 
          type="text" 
          name="text"  
          className="form-control w-100 my-3" 
          placeholder="Search Users..." 
          value={searchText}
          onChange={onChange}
        />
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-block btn-dark mb-3" 
        />
      </form>  
      {users && users.length === 0 ? null :
        (<button className="btn btn-light btn-block mb-4" onClick={clearUsers}>
          Clear
        </button>) 
      }
    </div>
  )
}

export default Search
