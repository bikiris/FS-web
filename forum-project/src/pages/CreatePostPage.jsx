const CreatePostPage = ({posts, setPosts, id, setId}) => {

  const createPost = (e) => {
    //always stop the default action
    e.preventDefault();

    console.log(e.target.subject.value); //subject text
    console.log(e.target.message.value); //message text

    //storing in variable for easier access
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    //append the new post to the old posts list
    setPosts([...posts, {
      id,
      subject,
      message
    }])

    console.log(posts);

    //increment the id 
    setId(id+1);

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