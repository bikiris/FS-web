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

  //false -> from most to least, true -> from least to most
  const [timeAscending, settimeAscending] = useState(false);

  const sortPostByTime = (unsortedPosts) => {
    const sortedPosts = unsortedPosts;

    sortedPosts.sort((postA, postB) => {
      //compare by upvotes
      const postATime = new Date(postA.created_at);
      const postBTime = new Date(postB.created_at);
      if(postATime > postBTime){
        return timeAscending ? 1 : -1; //determine the order based on ascending status
      }else {
        return timeAscending ? -1 : 1;
      }
    })
    //set the sorted post data
    setPosts(sortedPosts);
  }

  const getPosts = async () => {
    const response = await supabase.from('post').select();
    sortPostByTime(response.data);
  }

  useEffect(() => {
    getPosts();
  },[])

  const deletePost = async (id) => {
    const response = await supabase.from('post').delete().eq('id', id);
    console.log(response);

    //refresh posts -> refetch or just delete locally
    if(response.status == 204){
      alert("this post was deleted successfully.");
      getPosts();
    }
  }

  const upvotePost = async (post) => {
    const response = await supabase.from('post')
      .update({upvotes : post.upvotes+1})
      .eq('id', post.id);
    console.log(response);
    
    if(response.status == 204){
      alert("this post was upvoted successfully.");
      getPosts();
    }
  }

  const downvotePost = async (post) => {
    const response = await supabase.from('post')
      .update({upvotes : post.upvotes-1})
      .eq('id', post.id);
    console.log(response);
    
    if(response.status == 204){
      alert("this post was downvoted successfully.");
      getPosts();
    }
  }

  const convertTimestampToDate = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const timeDifference = currentTime - postTime;
    const timeDifferenceInMinutes = timeDifference / (1000 * 60);
    const timeDifferenceInHours = timeDifferenceInMinutes / 60;
    const timeDifferenceInDays = timeDifferenceInHours / 24;
    const timeDifferenceInWeeks = timeDifferenceInDays / 7;
    const timeDifferenceInMonths = timeDifferenceInDays / 30;
    const timeDifferenceInYears = timeDifferenceInDays / 365;

    if(timeDifferenceInMinutes < 1){
      return 'Just now';
    }
    if(timeDifferenceInMinutes < 60){
      return `${Math.floor(timeDifferenceInMinutes)} minutes ago`;
    }
    if(timeDifferenceInHours < 24){
      return `${Math.floor(timeDifferenceInHours)} hours ago`;
    }
    if(timeDifferenceInDays < 7){
      return `${Math.floor(timeDifferenceInDays)} days ago`;
    }
    if(timeDifferenceInWeeks < 4){
      return `${Math.floor(timeDifferenceInWeeks)} weeks ago`;
    }
    if(timeDifferenceInMonths < 12){
      return `${Math.floor(timeDifferenceInMonths)} months ago`;
    }
    if(timeDifferenceInYears >= 1){
      return `${Math.floor(timeDifferenceInYears)} years ago`;
    }

    return;
  }

  return (
    <div>
      <h1 className='text-[#FCA311] text-center p-4'>Class Discussion Board </h1>
      <div className='flex justify-center items-center gap-4 p-2'>
        <Link to='/create' className='border px-[1.2em] py-[0.6em] rounded-[8px] bg-[#1a1a1a] border-transparent hover:border-[#FCA311] '> Create a Post</Link>
        <button onClick={() => {
          settimeAscending(!timeAscending)
          sortPostByTime(posts);
        }}>Sort by Time {timeAscending ? 'v' : '^'}</button>
      </div>
      <div className='p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => {
          return(
            <div key={post.id} className='border p-4 rounded-[8px] bg-[#2a2a2a]'>
              <div className='flex gap-4 items-center'>
                <h4 className="text-3xl font-bold">{post.subject}</h4>
                <p>{convertTimestampToDate(post.created_at)}</p>
              </div>
              <p className='text-xl pt-2'>{post.content}</p>
              <div className='flex items-center gap-4 justify-center flex-wrap lg:flex-nowrap'>
                <p>Upvotes: {post.upvotes}</p>
                <button onClick={() => upvotePost(post)}>Upvote</button>
                <button onClick={() => downvotePost(post)}>Downvote</button>
                <button onClick={() => deletePost(post.id)}>Delete post</button>
              </div>
            </div>
        )})}
      </div>

    </div>
  )
}

export default App;