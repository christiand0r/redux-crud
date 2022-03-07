const Product = () => {
  return (
    <>
      <h2 className='text-center my-5'>Listado de Productos</h2>

      <table className='table table-striped'>
        <thead className='table-dark'>
          <tr>
            <th scope='col' className='text-center'>
              Nombre
            </th>
            <th scope='col' className='text-center'>
              Precio
            </th>
            <th scope='col' className='text-center'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Product;
