import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CharacterPage = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  const fetchCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    setCharacter(data);
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} width='200px'/>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>

        <Link to="/">Go Back to Home</Link>
    </div>
  )
}

export default CharacterPage;