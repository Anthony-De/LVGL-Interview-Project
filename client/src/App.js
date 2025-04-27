import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  // Collect the products from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Handle "Print to Console" button press
  const handlePrint = () => {
    fetch('http://localhost:5000/api/print-products', {
      method: 'POST',
    })
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.error('Error triggering print:', err));
  };

  // Render the App component UI
  return (
    <div className="App">
      <h1>Product List</h1>
      <button onClick={handlePrint}>Print to Console</button>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <strong>{prod.title}</strong> - ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;