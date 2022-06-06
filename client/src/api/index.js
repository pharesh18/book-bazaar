import axios from 'axios';

const url = 'http://localhost:8000/book';

export const fetchBooks = () => axios.get(url);
export const addBook = (bookData) => axios.post(url, bookData);
export const updateBook = (id, bookData) => axios.put(`${url}/update/${id}`, bookData);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);