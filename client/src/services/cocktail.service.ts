import axios from 'axios';
import { Cocktail, CocktailBase } from '../Types';

export const searchCocktailByName = async (cocktailName: string): Promise<Cocktail[]> => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}search.php`, {
        params: { s: cocktailName },
    });

    return response.data.drinks;
}

export const listCocktailByFirstLetter = async (letter: string): Promise<Cocktail[]> => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}search.php`, {
        params: { f: letter },
    });

    return response.data.drinks;
}

export const getRandomCocktail = async (): Promise<Cocktail[]> => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}random.php`);

    return response.data.drinks;
}

export const filterCocktail = async (param: {}): Promise<CocktailBase[]> => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}filter.php`, {
        params: param,
    });

    return response.data.drinks;
}
