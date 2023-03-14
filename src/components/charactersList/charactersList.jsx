import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
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
  UserMenuContainer,
  UserName,
  LogOutButton
} from './charactersList.styled';
import { logoutReducer } from 'redux/authSlice';

export const CharactersList = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch();
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const [filterValue, setFilterValue] = useState(localStorage.getItem('filter') || '');

    const handleChange = event => {
      setFilterValue(event.target.value);
      localStorage.setItem('filter', event.target.value);
    };

    useEffect(() => {
        getAllCharacters().then(res => {
        setCharacters(res);
        });
    }, []);

    const filteredCharacters = characters
        .filter(item =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .sort((first, second) => first.name.localeCompare(second.name));

    return (
      <>
        <UserMenuContainer>
          <UserName>Hello, {user.name}!</UserName>
          <LogOutButton
            type="button"
            onClick={() => {
              googleLogout();
              dispatch(logoutReducer());
            }}
          >
            Sign out
          </LogOutButton>
        </UserMenuContainer>

        <FilterInput
          type="text"
          name="username"
          value={filterValue}
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
