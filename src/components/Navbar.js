import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {



  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{"background":"#563d7c"}} >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to={"/"}><strong>MyNoteBook</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
