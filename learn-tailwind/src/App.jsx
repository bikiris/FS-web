const App = () => {
  return (
    <div  className="outer">
      <h1>Hello</h1>
      <div className="projects">
        <div className="project hover:bg-slate-300">
          <h1>Project 1</h1>
          <p>Description</p>
        </div>
        <div className="project">
          <h1 >Project 2</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

//my example of what you will be doing
const TailwindApp = () => {
  return (
    <div className="flex flex-col items-center mt-8 ">
        <h1>Hello</h1>
        <div className="flex flex-wrap gap-8 justify-center items-center mt-8">
          <div className="flex flex-col items-center justify-center border border-white border-solid bg-[#535bf2] rounded-xl">
            <h1>Project 1</h1>
            <p>Description</p>
          </div>
          <div className="flex flex-col items-center justify-center border border-white border-solid bg-[#535bf2] rounded-xl">
            <h1 >Project 2</h1>
            <p>Description</p>
          </div>
      </div>
    </div>
  )
}

export default App;