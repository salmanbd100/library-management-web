import { getBooks } from '../apiHelper';
import { GET_BOOKS } from '../types';
import { message } from 'antd';

export const GetBooks = () => {
    return async dispatch => {
        try {
            const response = await getBooks();
            return dispatch({
                type: GET_BOOKS,
                payload: response,
            });
        } catch(error) {
            message.error(error);
        }
    }
}