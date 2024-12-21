import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const[characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data)
    setCharacters(data.results);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);


  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}> {character.name} </Link>
            <img src={character.image} alt={character.name} width='200px'/>
            <ul>
              {character.episode.map((episode) => (
              
                  <li key={episode}>
                    <Link to={`episode/${episode.split('/').pop()}`}>{episode}</Link>
                  </li>
                
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;