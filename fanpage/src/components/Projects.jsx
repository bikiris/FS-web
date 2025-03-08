const Project = ({ title, description, link }) => {
  return (
    <div className="flex flex-col w-full lg:w-[400px] text-center  bg-[#219ebc22] rounded-md p-4 hover:bg-[#ffb70322]">
      <h1 className="">{title}</h1>
      <p>{description}</p>
      <a href={`${link}`} className="text-[#fb8500] hover:text-[#ffb703]">Link to the game</a>
    </div>
  )
}

const Projects = () => {
  const projectsList = [
    {
      title: "Game 1",
      description: "This is a game I made in my free time. It is a simple game where you have to collect coins and avoid obstacles.",
      link: "https://www.google.com"
    },
    {
      title: "Game 2",
      description: "This is another game I made. It is a platformer game where you have to jump over obstacles and reach the end of the level.",
      link: "https://www.google.com"
    }
  ]

  return (
    <div className="m-14 border border-[#ffb703] rounded-xl py-14 px-4 flex flex-col items-center">
      <h1>Other games</h1>
      <div className="flex mt-8 gap-8 justify-center flex-wrap lg:flex-nowrap">
        {projectsList.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} link={project.link} /> 
        ))}        

        <div className="flex gap-8 items-center">
          <p>123</p>

          <img src="https://images.themodernproper.com/billowy-turkey/production/posts/2017/SlowCookerCurryBeefRamen_12.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1676687732&s=efc1a121947d6a8b1ade52e2877b894d"
            width="200px"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;