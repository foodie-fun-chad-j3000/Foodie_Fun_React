import {
  LOADING,
  ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  FETCH_MEALS_SUCCESS,
  ADD_MEAL_SUCCESS,
  DELETE_MEAL_SUCCESS,
  UPDATE_MEAL_SUCCESS
} from '../actions';

const initialState = {
  error: '',
  meals: [],
  loading: false,
  isLoggedIn: false,
  addingUser: false,
  addingMeal: false,
  deletingMeal: false,
  updatingMeal: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      }

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        error: '',
        loading: false,
        isLoggedIn: true
      }

    case REGISTER_SUCCESS:
      localStorage.setItem('user_id', action.payload.user_id)
      return {
        ...state,
        error: '',
        loading: false,
        addingUser: true,
      }

    case FETCH_MEALS_SUCCESS:
      return {
        ...state,
        error: '',
        meals: [...action.payload],
        loading: false,
      }

    case ADD_MEAL_SUCCESS:
      return {
        ...state,
        error: '',
        meals: [...action.payload],
        loading: false,
        addingMeal: true,
      }

    case DELETE_MEAL_SUCCESS:
      return {
        ...state,
        error: '',
        // meals: [...action.payload],
        loading: false,
        deletingMeal: true,
      }

    case UPDATE_MEAL_SUCCESS:
      return {
        ...state,
        error: '',
        meals: [...action.payload],
        updatingMeal: true
      }

    default:
      return state
  }
}