export default (state = [], action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return action.payload;
        case 'DELETE':
            return state.filter((book) => book._id != action.payload);
        case 'ADD_BOOK':
            return [...state, action.payload];
        case 'UPDATE_BOOK':
            return state.map((book) => book._id == action.payload._id ? action.payload : book);
        default:
            return state;
    }
}


