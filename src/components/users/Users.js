import React, { useContext } from 'react'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner' 
import './users.css'

import GithubContext from '../../context/github/GithubContext'

const Users = () => {

  const githubContext = useContext(GithubContext)
  const { users, loading, searchResult } = githubContext

  return (
    loading ? (<Spinner />) :
    users.length === 0 ? (<div className="text-center" style={{ margin: '30vh 0' }}>
      <h3 className="text-secondary">Search Github Users to view their Profiles</h3>
    </div>) :
    (<>
      {searchResult !== null && (<h5 className="py-2 my-2">
        Search Results: <span className="text-success">{searchResult}</span>
      </h5>)}
      <div className="gridView">
        {users && users.map(user => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    </>)
  )
}

export default Users
