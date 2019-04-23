import {
  LOADING,
  ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,

  FETCH_MEALS_SUCCESS
} from '../actions';

const initialState = {
  error: '',
  meals: [],
  loading: false,
  addingUser: false

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return { ...state, error: '', loading: true }

    case ERROR:
      return { ...state, error: action.payload, loading: false }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.payload)
      return { ...state, error: '', loading: false }

    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.data.payload)
      return { ...state, error: '', loading: false, addingUser: true }


    case FETCH_MEALS_SUCCESS:
      return { ...state, error: '', meals: action.payload, loading: false }

    default:
      return state
  }
}
