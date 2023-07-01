import axios from 'axios';
import { Filters } from '../Types';

export const getFilters = async (param: {}): Promise<Filters[]> => {
    const response = await axios.get(`${process.env.REACT_APP_COCKTAIL_BASE_URL}list.php`, {
        params: param,
    });

    return response.data.drinks;
}