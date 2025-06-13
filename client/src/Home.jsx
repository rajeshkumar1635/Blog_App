import axios from 'axios'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await axios.get('http://localhost:3000/getposts');
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      welcome to home
    </div>
  )
}