## Project Structure
- Backend (Node.js + Express)
Fetches product data from [dummyjson.com](https://dummyjson.com/), serves it to the frontend, and prints formatted product data on request.
- Frontend (React)
Displays the list of products (title and price) and displays a button to trigger server-side console output.

## Running the Project
```bash
npm init -y
npm install
node server.js
```

### Frontend setup
```bash
npx create-react-app client
cd client
```
Replace the contents of src/App.js and src/App.css with the provided project files.
Then start the frontend server:
```bash
npm start
```
This will run the React app at [http://localhost:3000](http://localhost:3000)

## How it works
When the server starts, it fetches a list of products from [https://dummyjson.com/products](https://dummyjson.com/products).
React fetches the list of products from the backend API (GET /api/products) and displays their title and price.
A "Print to Console" button is shown on the frontend. When clicked:
  It sends a POST request to the backend API (POST /api/print-products).
  The backend prints the products in a plain-text table format to the server console.

## Technologies Used
### Backend:
  Node.js
  Express.js
  CORS
  node-fetch
### Frontend:
  React
  HTML5 + CSS3 (basic styling)


## Future Improvements
Auto-refresh products data every so often

Show a "loading..." indicating while fetching data

Add search/filter options on the frontend
