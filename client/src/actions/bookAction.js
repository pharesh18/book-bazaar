import * as api from '../api';

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBooks();
        dispatch({ type: 'GET_BOOKS', payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const addBook = (bookData) => async (dispatch) => {
    try {
        const { data } = await api.addBook(bookData);
        dispatch({ type: 'ADD_BOOK', payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const updateBook = (id, bookData) => async (dispatch) => {
    try {
        const { data } = await api.updateBook(id, bookData);
        dispatch({ type: 'UPDATE_BOOK', payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteBook = (id) => async (dispatch) => {
    try {
        await api.deleteBook(id);
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }
}

// export const getBook = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.getBook(id);
//         dispatch({ type: 'GET_BOOK', payload: data });
//     } catch (err) {
//         console.log(err);
//     }
// }