import { ADD_PRODUCT, SAVE_PRODUCT_SUCCESS, SAVE_PRODUCT_FAIL } from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function createNewProductAction(product) {
  return async dispatch => {
    dispatch(addProduct());

    try {
      //Insert in the BD/API
      await axiosClient.post('/products', product);

      //All ok. Update State
      dispatch(addProductSuccess(product));

      //Alert
      Swal.fire('Correcto', 'El producto se agrego correctamente', 'success');
    } catch (error) {
      console.log(error);
      dispatch(addProductFail(true));
    }
  };
}

const addProduct = () => ({ type: ADD_PRODUCT, payload: true });

//Save to DB
const addProductSuccess = product => ({
  type: SAVE_PRODUCT_SUCCESS,
  payload: product,
});

//Set Error true
const addProductFail = isError => ({
  type: SAVE_PRODUCT_FAIL,
  payload: isError,
});
