import axios from 'axios';

export const searchCocktailByName = async (cocktailName: string) => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}search.php`, {
        params: { s: cocktailName },
    });

    return response.data.drinks;
}

export const listCocktailByFirstLetter = async (letter: string) => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}search.php`, {
        params: { f: letter },
    });

    return response.data.drinks;
}

export const getRandomCocktail = async () => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}random.php`);

    return response.data.drinks;
}