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
