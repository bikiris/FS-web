/* Requirements
  1. user can make posts -> may contain image
  2. user can make comments under post
  3. user can like to post
  4. user can share post -> posts gets their detail page
  5. user can search post
*/

/* Pages
  1. home -> contains all the post
  2. post detail -> post + comments
  3. make post page
*/
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await supabase.from('post').select();
      setPosts(response.data)
    }

    getPosts();
  },[])

  return (
    <div>
      <h1> WELCOME TO MY FORUM </h1>

      <button><Link to='/create'> Create a Post</Link></button>

      {posts.map((post) => {
        return(
          <div key={post.id} style={{border:"1px solid red"}}>
            <h4>{post.subject}</h4>
            <p>{post.content}</p>
          </div>
      )})}

    </div>
  )
}

export default App;