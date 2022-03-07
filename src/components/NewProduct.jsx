import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions Redux
import { createNewProductAction } from '../actions/productsActions';

const initialForm = {
  name: '',
  price: '',
};

const NewProduct = () => {
  //Local State
  const [product, setProduct] = useState(initialForm);

  //Destructuring
  const { name, price } = product;

  //Redux
  const dispatch = useDispatch();
  const loading = useSelector(({ products }) => products.loading);
  const error = useSelector(({ products }) => products.error);

  const addProduct = product => dispatch(createNewProductAction(product));

  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //Validar formulario
    for (const key in product) {
      if (product[key].trim() === '') return console.log('Vacíos');
    }

    if (Number(price) < 0 || isNaN(price))
      return console.log('Error en Precios');
    //TODO: Verificar errores

    //Crear nuevo producto
    addProduct(product);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 fw-bold'>Agregar Nuevo Producto</h2>

            <form onSubmit={handleSubmit}>
              <div className='form-group mb-3'>
                <label htmlFor='product_name'>Nombre Producto</label>
                <input
                  type='text'
                  name='name'
                  id='product_name'
                  className='form-control'
                  placeholder='Nombre del Producto'
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor=''>Precio Producto</label>
                <input
                  type='number'
                  name='price'
                  id='product_price'
                  className='form-control'
                  placeholder='Precio del Producto'
                  value={price}
                  onChange={handleChange}
                />
              </div>

              <button
                type='submit'
                disabled={loading}
                className='btn btn-outline-primary fw-bold w-100 d-block'>
                {loading ? 'Cargando...' : 'Agregar'}
              </button>
            </form>
          </div>
        </div>

        {error ? (
          <div class='alert alert-dismissible alert-danger text-center mt-3'>
            <p style={{ margin: 0 }}>Ocurrio un error. Intente de nuevo</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewProduct;
