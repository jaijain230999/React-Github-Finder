import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
  return (
    <div className="card py-2 px-4 my-2">
      <h5>{
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={repo && repo.html_url} target="_blank" className='text-info'>{repo && repo.name}</a>
      }</h5>
    </div>
  )
}

RepoItem.defaultProps = {
  repo: {}
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem 