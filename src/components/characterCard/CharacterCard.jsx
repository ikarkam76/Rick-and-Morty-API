export const CharacterCard = ({character}) => {
    return (
      <div>
        <img src={character.image} alt="foto of character" />
        <h2>{character.name}</h2>
        <h3>Information</h3>
        <h4>Gender</h4>
        <p>{character.gender}</p>
        <h4>Status</h4>
        <p>{character.status}</p>
        <h4>Specie</h4>
        <p>{character.species}</p>
        <h4>Origin</h4>
        <p>{character.origin.name}</p>
        <h4>Type</h4>
        <p>{!character.type ? `Unknown` : character.type}</p>
      </div>
    );
}