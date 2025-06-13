import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './style.css'
import { userContext } from './App'
import { useContext } from 'react'
import axios from 'axios'

export default function Navbar() {
  const user = useContext(userContext);
  const navigate=useNavigate();
  const handleLogout=()=>{
axios.get("http://localhost:3000/logout")
.then((res) => {
  if(res.data==="Success")
  navigate(0);
})
.catch(err => console.log(err))
  }
  return (
    <div className='navbar-header'>
        <div>
            <h3>Blog App</h3>
        </div>
        <div>
<a href=""  className='link'>Home</a>
{
  user.username?<Link to="/create" className='link' >Create</Link>
  :<></>

}

<a href=""  className='link'>Contact</a>
        </div>
        {
          user.username?
          <div>
            <button onClick={handleLogout} className='btn btn-light'>LogOut</button>
            </div>:
      <div><h5><Link to="/register" className="link">Register / Login</Link></h5></div>

        }
    </div>
  )
}
