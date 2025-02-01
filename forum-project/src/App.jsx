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

import { useState } from 'react';

import CreatePostPage from './pages/CreatePostPage'

const App = () => {

  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  return (
    <div>
      <h1> WELCOME TO MY FORUM </h1>

      <CreatePostPage posts={posts} setPosts={setPosts} id={id} setId={setId} />

      {posts.map((post) => {
        return(
          <div key={post.id} style={{border:"1px solid red"}}>
            <h4>{post.subject}</h4>
            <p>{post.message}</p>
          </div>
      )})}

    </div>
  )
}

export default App;