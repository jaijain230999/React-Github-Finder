import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = (props) => {
  const { login, avatar_url } = props.user
  return (
    <div className='card text-center py-2'>
      <img 
        src={avatar_url} 
        alt=""
        className='rounded-circle mx-auto'
        width='100px' 
      />
      <h4 className="my-2">{login}</h4>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm mb-1">
          More
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
