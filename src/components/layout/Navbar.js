import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <nav className="navbar navbar-expand-md navbar-dark bg-info">
        <div className="container">
        
          <Link to={'/'} className="navbar-brand text-light">
            <i className="fab fa-github" /> Github Finder
          </Link>
          
          <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question-circle" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
