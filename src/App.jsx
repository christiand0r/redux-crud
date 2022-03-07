import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Product from './components/Product';
import EditProduct from './components/EditProduct';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/products/new' element={<NewProduct />} />
            {/* Ruta para editar y eliminar */}
            <Route path='/products/:id' element={<EditProduct />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
