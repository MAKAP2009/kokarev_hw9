import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage';
import ContactPage from '../ContactPage';
import ProductPage from '../ProductPage';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of product 1', price: 10 },
  { id: 2, name: 'Product 2', description: 'Description of product 2', price: 20 },
  { id: 3, name: 'Product 3', description: 'Description of product 3', price: 30 },
  { id: 4, name: 'Product 4', description: 'Description of product 4', price: 40 },
  { id: 5, name: 'Product 5', description: 'Description of product 5', price: 50 }
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">      */}
      <h2>Homework 9</h2>
       <Router>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          {products.map((product) => (
            <li key={product.id}>
              <NavLink to={`/product/${product.id}`} activeClassName="active">
                {product.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage products={products} />} />
      </Routes>
    </Router>
        
      {/* </header> */}
    </div>
  );
}

export default App;
