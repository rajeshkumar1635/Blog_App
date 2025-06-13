import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

function Post() {
    const {id}=useParams();
    const [post,setPost]=useState({})
    useEffect(()=>{
        axios.get('http://localhost:3000/getpostbyid/'+id)
        .then(result=>setPost(result.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='post-box'>
        <img src={`http://localhost:3000/Images/${post.file}`} alt=""/>
        <div className='post-content'>
            <h2>
            {post.title}
        </h2>
        <p>
            {post.desc}
        </p></div>
        <div className='post-btn-row'><button className='btn btn-primary'>Edit</button>
        <br></br>
        <button className='btn btn-danger'>Delete</button></div>
        
        </div>
  )
}

export default Post