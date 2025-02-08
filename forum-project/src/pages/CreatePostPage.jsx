import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const CreatePostPage = ({posts, setPosts, id, setId}) => {

  const createPost = async (e) => {
    //always stop the default action
    e.preventDefault();

    //storing in variable for easier access
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    //insert into the database
    const response = await supabase.from('post').insert({
      subject: subject,
      content: message
    })

    console.log(response)

    console.log("Post created");
  }

  return (
    <div>
      <form onSubmit={(e) => createPost(e)}>
        <h3>Make a post</h3>
        <input type='text' placeholder='Enter your subject' id='subject'/>
        <br></br>
        <textarea placeholder='Enter your post message in here' id='message'/>
        <br></br>
        <button type='submit'>Create post</button>
      </form>
    </div>
  )
}

export default CreatePostPage;