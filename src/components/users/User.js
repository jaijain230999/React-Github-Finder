import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

import GithubContext from '../../context/github/GithubContext'

const User = ({ match }) => {

  const githubContext = useContext(GithubContext)
  const { getSingleUser, user, loading, getUserRepos } = githubContext

  useEffect(() => {
    getSingleUser(match.params.login)
    getUserRepos(match.params.login)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { 
    name, 
    avatar_url, 
    location, 
    bio, 
    blog, 
    login, 
    html_url, 
    followers, 
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user

  return (
    <>
      <Link to="/" className="btn btn-light"><i className="fas fa-arrow-circle-left" /> Back to Search </Link>
      {loading ? (<Spinner />) : (
      <>
        <h4 className="mx-3 my-1 float-right">Hireable: {hireable ? 
          (<i className="fas fa-check text-success" />) : 
          (<i className="fas fa-times-circle text-danger"/>)
        }
        </h4> 
        <div className="card my-3 p-2 w-100">
          <div className="row m-0">
            <div className="col-md-6">
              <div className="text-center">
                <img 
                  src={avatar_url} 
                  alt="avatar"
                  className="rounded-circle mx-auto"
                  style={{width: '150px', padding: '10px 0'}}
                />
                <h1>{name}</h1>
                <p>{location}</p>
              </div>
            </div>
            <div className="col-md-6">
              {bio && (
                <>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </>
              )}
              {
                <a 
                href={html_url} 
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank" 
                className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
              }
              <ul style={{listStyleType: 'none', padding: '0', marginTop: '5px'}}>
                <li>
                  {login && (
                    <>
                      <strong>Username: </strong> {login}
                    </>
                  )}
                </li>
                <li>
                  {company && (
                    <>
                      <strong>Company: </strong>{company}
                    </>
                  )}
                </li>
                <li>
                  {blog && (
                    <>
                      <strong>Website: </strong>{blog}
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-row justify-content-center">
          <div className="row m-0">
            <h5><div className="badge badge-info mt-2 mx-2 p-2">Followers: {followers}</div></h5>
            <h5><div className="badge badge-success mt-2 mx-2 p-2">Following: {following}</div></h5>
            <h5><div className="badge badge-danger mt-2 mx-2 p-2">Public Repos: {public_repos}</div></h5>
            <h5><div className="badge badge-dark mt-2 mx-2 p-2">Public Gists: {public_gists}</div></h5>
          </div>
        </div>

        <Repos />
      </>)
      }
    </>
  )
}

export default User
