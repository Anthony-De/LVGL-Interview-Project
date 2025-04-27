import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

// Array to store products after fetching from external API
let products = [];

// Fetch dummy product data
const fetchData = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  products = data.products;
  console.log("Products fetched successfully!");
};

// Immediately fetch data when the server starts
fetchData();

// API endpoint to send product data to the frontend
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint to print products to the server console
app.post('/api/print-products', (req, res) => {
  if(!products.length) {
    return res.status(500).send("No products fetched!");
  }

  console.log('\n--- Product List ---');
  console.log("Title               | Price");
  console.log("--------------------|------");
  products.forEach(prod => {
    const title = prod.title.padEnd(30);
    const price = `$${prod.price}`.padStart(5);
    console.log(`${title} | ${price}`);
  });
  console.log('====================');

  res.send('Products printed to console.');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));