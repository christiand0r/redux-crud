import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <h1 className='text-light' style={{ margin: 0 }}>
            CRUD - R.R.R.A
          </h1>
        </Link>
        <Link
          to='/products/new'
          className='btn btn-light d-block dm-md-inline-block'>
          Agregar Producto &#43;
        </Link>
      </div>
    </nav>
  );
};

export default Header;
