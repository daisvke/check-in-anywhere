import { createStore } from 'redux'
import produce from 'immer'

const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const initialState = {
  language: '',
  currentPage: 0,
  timestamp: '', //useless?
  totalPages: 7,
  submitted: false,
  error: false,
  signedIn: false,

  // Elements for Sign Up Page:
  signUp: {
    name: '',
    email: '',
    password: '',
    confPassword: '',
  },

  // Elements from the questionaire:
  questions: {
    firstname: '',
    surname: '',
    arrivalDate: today.toLocaleDateString(),
    departureDate: tomorrow.toLocaleDateString(),
    birthDate: '',
    birthPlace: '',
    nationality: '',
    address: '',
    addressZipCode: '',
    addressCity: '',
    addressCountry: '',
    mobile: '',
    email: '',
    sign: '',
    cbNumber: '',
    cbExpDate: '',
    cbSecurityCode: '',
  },
}

function reducer(state = initialState, action) {
  const homePage = 0
  const totalPages = state.totalPages
  if (action.type === 'resetPage')
    return produce(state, (draft) => {
      draft.currentPage = 0
    })
  if (action.type === 'prevPage' && state.currentPage > homePage)
    return produce(state, (draft) => {
      --draft.currentPage
    })
  if (action.type === 'nextPage' && state.currentPage < totalPages)
    return produce(state, (draft) => {
      ++draft.currentPage
    })
  if (action.type === 'setEnv') {
    const name = action.payload.name
    return produce(state, (draft) => {
      draft[name] = action.payload.value
    })
  }
  if (action.type === 'updateAnswer') {
    const category = action.payload.category
    const question = action.payload.question
    const answer = action.payload.value
    return produce(state, (draft) => {
      draft[category][question] = answer
    })
  }
  return state
}

export const store = createStore(reducer, initialState)

/*
store.subscribe(
    // This function is executed any time the state has changed
    () => {
        const state = store.getState();
        console.log(state.questions.sign);
    }
)
*/
