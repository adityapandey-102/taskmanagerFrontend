import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const [cred, setCred] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const host="https://mynotebookbackend1.onrender.com"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${host}/api/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: cred.email, password: cred.password })
        });
        const json = await response.json();
        if (json.success) {
            //Save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            navigate("/");
            props.showAlert("You are successfully logged in", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }


    return (
        <div className="container" style={{ "minHeight": "600px", "width": "700px", "boxShadow": "5px 5px 10px grey, -5px -5px 10px grey", "borderRadius": "5px" }}>
            <div className='container' >
                <div className='container' align="center" style={{ "paddingTop": "40px", "paddingBottom": "20px" }}>
                    <h2>Login Account To Use <b><u>MyNoteBook</u></b></h2>
                </div>
                <form className='my-3 mx-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
                    </div>
                    <button disabled={cred.password.length < 5} type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
