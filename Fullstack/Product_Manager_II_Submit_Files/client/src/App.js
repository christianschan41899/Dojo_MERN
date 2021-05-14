import './App.css';
import { Router } from '@reach/router';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path = "/"/>
        <ProductDetails path = "product/:id/" />
      </Router>
      
    </div>
  );
}

export default App;
