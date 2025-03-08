const Projects = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-green-200 ">
      <h2 className="text-4xl">My Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="flex flex-col bg-amber-200 rounded-xl p-5">
          <h3 className="text-2xl">Class Forum - <a href="#">Link to Github</a></h3>
          <p className="text-lg">A class discussion board where students can create and upvote posts</p>
          <img alt='placeholder' />
        </div>
        <div className="flex flex-col bg-amber-200 rounded-xl p-5">
          <h3 className="text-2xl">Fanpage - <a href="#">Link to Github</a></h3>
          <p className="text-lg">placeholder placeholder</p>
          <img alt='placeholder' />
        </div>
      </div>
    </section>
  )
}

export default Projects;