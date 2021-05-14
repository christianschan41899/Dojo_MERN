import './App.css';
import { Router } from '@reach/router';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path = "/"/>
        <ProductDetails path = "/product/:id/" />
        <ProductEdit path = "/product/:id/edit/" />
      </Router>
      
    </div>
  );
}

export default App;
