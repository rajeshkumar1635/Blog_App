import React  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", {
      username,
      email,
      password
    })
    .then(() => navigate('/login'))
    .catch(err=>console.log(err));
  };
  return (
    <div>
      <div>
        <h2>
            Sign UP
        </h2>

        <form onSubmit={handleSubmit}>
<div >
    <label htmlFor="name" className="form-label">UserName:</label>
    <input type="text" placeholder='Enter UserName' className="form-control"
    onChange={e=>setUserName(e.target.value)}
    value={username}/>
</div>
<div>
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" placeholder="Enter Email" className="form-control" value={email}
    onChange={e=>setEmail(e.target.value)}/>
</div>
<div>
    <label htmlFor="password" className="form-label">Password:</label>
    <input type="password" 
    value={password}
    onChange={e=>setPassword(e.target.value)}
    placeholder='******' className="form-control"/>
</div>
<br></br>
<button type="submit" className='btn btn-primary'>Sign up</button>
        </form>
        <br>
        </br>
        <p>
            Already Registered
        </p>
    
            <Link to='/login'>    <button className="btn btn-success">Login</button></Link>
      </div>
     
    </div>
  )
}
