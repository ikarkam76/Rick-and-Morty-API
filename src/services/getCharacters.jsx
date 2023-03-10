import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const getAllCharacters = async () => {
  try {
    const result = await axios.get(`${API_URL}`);
    const items = [];
    for (let i = 1; i <= result.data.info.count; i++){
      items.push(i)
    }
    const {data} = await axios.get(`${API_URL}${items}`)
    return data;
  } catch (error) {
    return console.error(error.message);
  }
};

export const getCharacter = async id => {
  try {
    const response = await axios.get(`${API_URL}${id}`);
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};
