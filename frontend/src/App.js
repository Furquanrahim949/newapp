import React from 'react';
import Register from './pages/Register';
import ProductForm from './components/ProductForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Register</h1>
        <Register />
        <h1>Add Product</h1>
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
