import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom"
import { getAllCharacters } from "services/getCharacters";
import { FilterInput, HomeContainer, ItemCard, ItemImg, ItemImgContainer, ItemLegend, ItemName, ItemSpecie, ListContainer, Logo, StyledLink } from "./Home.styled";

export const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState(localStorage.getItem('filter') || '');
    const location = useLocation();
    
    useEffect(() => {
        getAllCharacters().then(res => {
            setCharacters(res);
        })
    },[])

   const handleChange = event => {
     setFilter(event.target.value);
     localStorage.setItem('filter', event.target.value);
   };

    const filteredCharacters = characters
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .sort((first, second) => first.name.localeCompare(second.name));

    return (
      <HomeContainer>
          <Logo />
          <FilterInput
            type="text"
            name="username"
            value={filter}
            placeholder="Filter by name..."
            onChange={handleChange}
          />
        <ListContainer>
                {!characters[1]
                    ? <div>Loading...</div>
                    : filteredCharacters.map(item => {
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
          })}
        </ListContainer>
      </HomeContainer>
    );
}