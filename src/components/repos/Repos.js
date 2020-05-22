import React, { useContext } from 'react'
import Spinner from '../layout/Spinner'
import RepoItem from './RepoItem'

import GithubContext from '../../context/github/GithubContext'

const Repos = () => {

  const githubContext = useContext(GithubContext)
  const { repos, loading } = githubContext
  if(loading)
    return <Spinner />
  return (
    <>
      <h4 className="mt-5 mb-3">>> Recent Repositories:</h4>
      {repos && repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
    </>
  )
}

export default Repos
