import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div>
      <img src={ spinner } alt="Loading..."
        style={{
          margin: 'auto',
          display: 'block',
          width: '180px'
        }}
      />
    </div>
  )
}

export default Spinner
