import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
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
  FilterContainer,
  UserMenu,
  UserMenuContainer,
  UserName,
  UserMenuButton
} from './charactersList.styled';

export const CharactersList = ({logout}) => {
    const [user, setUser] = useState({})
  const [characters, setCharacters] = useState([]);
  const [isMenu, setIsMenu] = useState(false);
    const location = useLocation();
  const [filterValue, setFilterValue] = useState(localStorage.getItem('filter') || '');
  const token = localStorage.getItem('token')

    const handleChange = event => {
      setFilterValue(event.target.value.trimStart());
      localStorage.setItem('filter', event.target.value);
    };

  useEffect(() => {
    if (token) {
        getAllCharacters().then(res => {
          setCharacters(res);
          axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
            { headers: { Authorization: `Bearer ${token}` } }
          ).then(res => setUser(res.data));
        });
      }
  }, [token]);

    const filteredCharacters = characters
        .filter(item =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .sort((first, second) => first.name.localeCompare(second.name));

  const toggleMenu = () => {
    setIsMenu(prev => !prev);
    }

    return (
      <>
        <FilterContainer>
          <FilterInput
            type="text"
            name="username"
            value={filterValue}
            placeholder="Filter by name..."
            onChange={handleChange}
          />
          <UserMenu type="button" onClick={toggleMenu}></UserMenu>
          {isMenu && (
            <UserMenuContainer>
              <UserName>Hello, {user.name}!</UserName>
              <UserMenuButton type="button" onClick={logout}>
                Sign out
              </UserMenuButton>
            </UserMenuContainer>
          )}
        </FilterContainer>
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
