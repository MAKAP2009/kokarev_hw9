import React from 'react';
import { useParams } from 'react-router-dom';
import image from '../img/product.jpg'

function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductPage;
