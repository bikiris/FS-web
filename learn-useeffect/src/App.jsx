import { useState, useEffect } from 'react'

// const App = () => {

//   const [joke, setJoke] = useState('No jokes available')

//   const fetchJoke = async (event) => {
//     event.preventDefault();
//     const category = event.target.category.value;
//     const type = event.target.type.value;
//     const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=${type}`)
//     const data = await response.json()

//     console.log(data)
//     if (type === 'single') setJoke(data.joke)
//     else setJoke(data.setup + '\n' + data.delivery)
//   }

//   // useEffect(() => {
//   //   fetchJoke("Any")
//   // }, [])

//   return (
//     <div>
//       <h1>{joke}</h1>
//       <form onSubmit={fetchJoke}>
//         <label>Choose a category</label>
//         <select name="category" id="category">
//           <option value="Any">Any</option>
//           <option value="Misc">Misc</option>
//           <option value="Programming">Programming</option>
//           <option value="Dark">Dark</option>
//           <option value="Pun">Pun</option>
//           <option value="Spooky">Spooky</option>
//           <option value="Christmas">Christmas</option>
//         </select>
//         <br /> 

//         <label>Choose a type</label>
//         <select name="type" id="type">
//           <option value="twopart">Two Part</option>
//           <option value="single">Single</option>
//         </select>
//         <br />
//         <button>Get Joke</button>
//       </form>
      
//     </div>
//   )
// }

const App = () => {

  const [catImageLink, setCatImageLink] = useState('')

  const fetchCatImageLink = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=beng')
    const data = await response.json()
    console.log(data)
    setCatImageLink(data[0].url)
  }

  useEffect(() => {
    fetchCatImageLink()

    return; //doing things when leaving webpage
  }, [])

  return (
    <div>
      <p>{catImageLink}</p>
      <img src={catImageLink} alt="cat" height='200px'/>
    </div>
  )
}



export default App;