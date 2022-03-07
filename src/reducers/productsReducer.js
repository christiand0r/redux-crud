import { ADD_PRODUCT, SAVE_PRODUCT_SUCCESS, SAVE_PRODUCT_FAIL } from '../types';

//Cada Reducer tiene su propio state
const initialState = {
  products: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action = { type: 'default' }) {
  const actions = {
    ADD_PRODUCT() {
      return {
        ...state,
        loading: action.payload,
      };
    },
    SAVE_PRODUCT_SUCCESS() {
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    },
    SAVE_PRODUCT_FAIL() {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  };

  //Retorna el state si el action.type no existe
  return actions[action.type] ? actions[action.type]() : state;
}
