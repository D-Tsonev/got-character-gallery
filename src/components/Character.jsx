import React from 'react'

const Character = ({ name, imgUrl, birth, death, race, realm, spouse }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <ul>
        <li>Date of birth: {birth}</li>
        <li>Date of death: {death}</li>
        <li>Race: {race}</li>
        <li>Realm: {realm}</li>
        <li>Spouse: {spouse}</li>
      </ul>
    </div>
  );
};

export default Character;