
##React TypeScript Mock API Project
This project demonstrates a simple React application built with TypeScript that retrieves data from a mock API created in Mockoon.

##Prerequisites:

1-Node.js and npm (or yarn) installed on your system.
##Setup:

Create React App:

1-bash
  .npx create-react-app my-react-app --template typescript
  .cd my-react-app
2-Install Mockoon:
  .Download and install Mockoon from the official website based on your operating system.

##Create Mock APIs:

Launch Mockoon.
1-Create a new environment (eg, "My Mock APIs").
2-Under the "Routes" tab, add a new route for your desired API endpoint (eg, /api/products).
3-Configure the route's method (GET, POST, etc.) and response data.
3-Start Development Server:

##bash
1-npm start
This will start the React development server, usually accessible at http://localhost:3000.

##Project Structure:

The React project typically follows this structure:

1-src/: Contains the application source code.
App.tsx: Main application component.
Other components (optional).
Additional TypeScript files (types, utilities).
Mocking API Data:

--You can use Mockoon to define your mock API response data. This can be static JSON data or dynamic responses based on your needs.

  .Fetching Data in React:

  .Use the fetchAPI or a library like Axios to make requests to your mock API endpoints.

##Example: ProductList Component:

The ProductListcomponent demonstrates fetching product data from the mock API and displaying it in a list:

TypeScript
// src/app.tsx

import React, { useEffect, useState } from 'react';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, [products]);
  

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => 
          <li key={product.id}>{product.name}</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;

This component defines an interface for Producttype and fetches data from the /api/productsendpoint. The fetched data is then used to populate the product list.

use curl<api link> to call the 
NB:make shure the CORS are configure correctly on your mockoon to avoid error
