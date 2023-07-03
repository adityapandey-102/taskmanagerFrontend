import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/noteContext';


function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const [style, setStyle] = useState({
    "display": "none"
  });
  const context = useContext(noteContext);
  const { user } = context;
  const date = Date(user.timeStamp);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  const handleDropdown = () => {
    setStyle({
      "minWidth": "250px",
      "minHeight": "400px",
      "background": "white",

      "zIndex": "1",
      "display": style.display === "block" ? "none" : "block",
      "position": "absolute",
      "right": "10px",
      "top": "60px",
      "borderRadius": "5px",
      "boxShadow": "5px 5px 10px grey, -5px -5px 10px grey"
    })

  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`${(location.pathname === "/login") ||(location.pathname === "/signup") ? (location.pathname === "/login"?"/login":"/signup") : "/"}`}><strong>MyNoteBook</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {localStorage.getItem('token') ? <><li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            </> : <></>}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <div className="d-flex">
            <Link className="btn btn-primary mx-1" to={"/login"} role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to={"/signup"} role="button">Signup</Link>
          </div> : <><button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>
            <div className="dropdown" style={{ "position": "relative" }} >
              <button type="button" className="btn btn-secondary dropbtn" onClick={handleDropdown} >
                A
              </button>
              <div className="dropContent" style={style}>
                <div className="container flex my-4" style={{ "textAlign": "center" }}>
                  <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="profilepic"
                    style={{ "width": "100px", "height": "100px", "boxShadow": "5px 5px 10px grey, -5px -5px 10px grey", "borderRadius": "50px" }} /></div>
                <hr style={{ "border": "2px solid black", "boxShadow": "5px 5px 50px grey, -5px -5px 50px grey" }} />
                <div className="container">
                  <strong>User:</strong><p>{user.name}</p>
                  <strong>User Email:</strong><p>{user.email}</p>
                  <strong>Account Created on:</strong><p>{date}</p>
                </div>
                <hr style={{ "border": "2px solid black", "boxShadow": "5px 5px 10px grey, -5px -5px 10px grey" }} />
              </div>
            </div></>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
