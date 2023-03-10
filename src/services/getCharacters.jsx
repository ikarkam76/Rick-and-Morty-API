const axios = require('axios').default;

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        return console.error(error.message);
    }
}

export const getCharacter = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response;
    } catch (error) {
        return console.error(error.message);
    }
}