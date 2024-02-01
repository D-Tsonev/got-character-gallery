import React, { useState, useEffect } from 'react';
import characterData from '../data/characterData.json';
import Character from './Character';

const CharacterGallery = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchChar = () => {

      setData(characterData);
    }
    
  fetchChar()
  }, []);

  console.log(characterData);
  console.log('something');

  return (
    <>
      {console.log(characterData)}
      {data && data.map((character) => (
        <Character
          key={character._id}
          name={character.name}
          imgUrl={character.imgUrl}
          birth={character.birth}
          death={character.death}
          race={character.race}
          realm={character.realm}
          spouse={character.spouse}
        />
      ))}
    </>
  );
};

export default CharacterGallery;
