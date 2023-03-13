import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllCharacters } from 'services/getCharacters';
import {
  FilterInput,
  ListContainer,
  ItemCard,
  StyledLink,
  ItemImgContainer,
  ItemImg,
  ItemLegend,
  ItemName,
  ItemSpecie,
} from './charactersList.styled';

export const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const [filter, setFilter] = useState(localStorage.getItem('filter') || '');

    const handleChange = event => {
      setFilter(event.target.value);
      localStorage.setItem('filter', event.target.value);
    };

    useEffect(() => {
        getAllCharacters().then(res => {
        setCharacters(res);
        });
    }, []);

    const filteredCharacters = characters
        .filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((first, second) => first.name.localeCompare(second.name));

    return (
      <>
        <FilterInput
          type="text"
          name="username"
          value={filter}
          placeholder="Filter by name..."
          onChange={handleChange}
        />
        <ListContainer>
          {!characters[1] ? (
            <div>Loading...</div>
          ) : (
            filteredCharacters.map(item => {
              return (
                <li key={item.id}>
                  <ItemCard>
                    <StyledLink
                      to={`character/${item.id}`}
                      state={{ from: location }}
                    >
                      <ItemImgContainer>
                        <ItemImg src={item.image} alt="foto of character" />
                      </ItemImgContainer>
                      <ItemLegend>
                        <ItemName>{item.name}</ItemName>
                        <ItemSpecie>{item.species}</ItemSpecie>
                      </ItemLegend>
                    </StyledLink>
                  </ItemCard>
                </li>
              );
            })
          )}
        </ListContainer>
      </>
    );
};
