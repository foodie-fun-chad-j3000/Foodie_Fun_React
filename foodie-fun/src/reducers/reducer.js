import {
  LOADING,
  ERROR,
  FETCH_MEALS_SUCCESS
} from '../actions';

const initialState = {
  error: '',
  meals: [],
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return { ...state, error: '', loading: true }

    case ERROR:
      return { ...state, error: action.payload, loading: false }

    case FETCH_MEALS_SUCCESS:
      return { ...state, error: '', meals: action.payload, loading: false }

    default:
      return state
  }
}
