import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCharacter } from 'services/getCharacters';
import { BackLink } from 'components/backLink/BackLink';
import { CharacterCard } from 'components/characterCard/CharacterCard';
import { CharacterContainer } from './Character.styled';


export const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const location = useLocation();
    const backHref = location.state?.from ?? '/';

    useEffect(() => {
        getCharacter(id).then(res=>setCharacter(res.data))
    }, [id])

    return (
      <CharacterContainer>
            <BackLink to={backHref}>
                GO BACK
            </BackLink>
            {character === null
                ? <div>Loading...</div>
                : <CharacterCard character={character} />
                    }
      </CharacterContainer>
    );
}
