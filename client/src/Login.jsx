import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3000/login", {
        email,
        password
      })
      .then(res=> 
      {
        if(res.data==="Success"){
          window.location.href="/";
    
        }
      }
      )
      .catch(err=>console.log(err));
    };
  return (
   
      <div className='container-fluid'>
        <h2>
           Login 
        </h2>
        <form onSubmit={handleSubmit}>
<div>
    <label  className="form-label">Email:</label>
    <input type="email" onChange={e=>setEmail(e.target.value)}
    value={email}
    placeholder="Enter Email" className="form-control"/>
</div>
<div>
    <label  className="form-label">Password:</label>
    <input type="password"
     onChange={e=>setPassword(e.target.value)}
    value={password} placeholder='*********' className="form-control"/>
</div>
<br></br>
<button type="submit" className='btn btn-primary'>Login</button>
        </form>
        <br>
        </br>
        <p>Not Registered?</p>
        <Link to='/register'>
          <button className="btn btn-secondary">Register</button>
          </Link>
      </div>
  )
}
