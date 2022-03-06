import { createStore } from 'redux';

const initialState = {
    language: 0,
    currentPage: 0,
    totalPages: 5
};

const prevPageAction = {
    type: "prevPage"
}

const nextPageAction = {
    type: "nextPage"
}

function reducer(state, action) {
    const homePage = 0;
    const totalPages = state.totalPages;
    if (action.type === "prevPage" && state.currentPage > homePage) {
        return {...state, currentPage: --state.currentPage};
    }
    if (action.type === "nextPage" && state.currentPage < totalPages) {
        return {...state, currentPage: ++state.currentPage};
    }
    return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(
    // This function is executed any time the state has changed
    () => {
        //const state = store.getState();
    }
)
