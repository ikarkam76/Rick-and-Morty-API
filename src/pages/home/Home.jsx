import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom"
import { getAllCharacters } from "services/getCharacters";
import { FilterInput, HomeContainer, ItemCard, ItemImg, ItemImgContainer, ItemLegend, ItemName, ItemSpecie, Logo, StyledLink } from "./Home.styled";

export const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState('');
    const location = useLocation();
    
    useEffect(() => {
        getAllCharacters().then(res => {
            setCharacters(res);
        })
    },[])

   const handleChange = event => {
       setFilter(event.target.value);
   };

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
        <ul>
          {characters.map(item => {
              return (
                <li key={item.id}>
                  <StyledLink
                    to={`character/${item.id}`}
                    state={{ from: location }}
                  >
                    <ItemCard>
                      <ItemImgContainer>
                        <ItemImg src={item.image} alt="foto of character" />
                      </ItemImgContainer>
                      <ItemLegend>
                        <ItemName>{item.name}</ItemName>
                        <ItemSpecie>{item.species}</ItemSpecie>
                      </ItemLegend>
                    </ItemCard>
                  </StyledLink>
                </li>
              );
          })}
        </ul>
      </HomeContainer>
    );
}