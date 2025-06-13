import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const post = await axios.get('http://localhost:3000/getposts');
        console.log(post);
        setPosts(post.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className='fluid-container'>
      {
        posts.map(p=>(
          <Link to={`/post/${p._id}`}  className='post-box' key={p._id}>
            <img src={`http://localhost:3000/Images/${p.file}`} alt=""/>
            <div className='post-content'>
          <h3>
            {p.title}
          </h3>
          <p>
            {p.desc}
          </p>
          </div>
          </Link>
        ))
      }
    </div>
  )
}