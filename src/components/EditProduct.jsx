import React from 'react';

const NewProduct = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 fw-bold'>Editar Nuevo Producto</h2>

            <form>
              <div className='form-group mb-3'>
                <label htmlFor='product_name'>Nombre Producto</label>
                <input
                  type='text'
                  name='name'
                  id='product_name'
                  className='form-control'
                  placeholder='Nombre del Producto'
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
                />
              </div>

              <button
                type='submit'
                className='btn btn-outline-dark fw-bold w-100 d-block'>
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
