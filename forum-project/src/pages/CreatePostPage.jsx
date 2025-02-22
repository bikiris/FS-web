import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

import { useNavigate } from "react-router-dom";
import { Filter } from 'bad-words';

const CreatePostPage = () => {

  const navigate = useNavigate();

  const createPost = async (e) => {
    //always stop the default action
    e.preventDefault();

    //storing in variable for easier access
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if(subject.trim() === '' || message.trim() === ''){
      alert("Please fill in all the fields");
      return;
    }

    const filter = new Filter();

    //insert into the database
    const response = await supabase.from('post').insert({
      subject: filter.clean(subject),
      content: filter.clean(message)
    })

    //successful post creation
    if(response.status == 201){
      alert("Your post has been successfully created");
      navigate('/');
    }else{
      alert("There is something wrong")
    }

  }

  return (
    <div className="flex flex-col justify-center items-center  h-[100vh]">
      <form onSubmit={(e) => createPost(e)} className='flex flex-col gap-4 p-8 max-w-5xl w-full'>
        <h3 className='text-5xl text-center'>Make a post</h3>
        <input type='text' placeholder='Enter your subject' id='subject'
          className='bg-black py-2 px-4 border rounded-[8px]'/>     
        <textarea placeholder='Enter your post message in here' id='message'
          className='bg-black py-2 px-4 border rounded-[8px]'/>
        <button type='submit'>Create post</button>
      </form>
    </div>
  )
}

export default CreatePostPage;