import { createStore } from 'redux';

const initialState = {
    language: "",
    currentPage: 0,
    totalPages: 5,
    // Elements from the questionaire :
    roomNumber: 0,
    arrivalDate: "",
    departureDate: "",
    surname: "",
    firstname: "",
    birthDate: "",
    birthPlace: "",
    nationality: "",
    address: "",
    mobile: "",
    email: "",
    mobileNumber: "",
    date: "",
    sign: "",
    cbNumber: "",
    cbExpDate: ""
};

function reducer(state = initialState, action) {
    const homePage = 0;
    const totalPages = state.totalPages;
    if (action.type === "prevPage" && state.currentPage > homePage) {
        return {...state, currentPage: --state.currentPage};
    }
    if (action.type === "nextPage" && state.currentPage < totalPages) {
        return {...state, currentPage: ++state.currentPage};
    }
    if (action.type === "updateAnswer") {
        const question = action.payload.question;
        const answer = action.payload.value;
        console.log("question: " + question);
        console.log("answer: " + answer);
        return {...state, [question]: [answer]}
    }
    return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(
    // This function is executed any time the state has changed
    () => {
        const state = store.getState();
        console.log(state.roomNumber);
    }
)
