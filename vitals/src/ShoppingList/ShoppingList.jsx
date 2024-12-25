import React from 'react';
import './ShoppingList.css'; // Ensure you create a corresponding CSS file for styling

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$59.99',
    image: 'https://via.placeholder.com/150',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: '$699.99',
    image: 'https://via.placeholder.com/150',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    price: '$1299.99',
    image: 'https://via.placeholder.com/150',
    rating: 4.7,
  },
  // Add more products as needed
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <p className="product-rating">Rating: {product.rating} ★</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

const ShoppingList = () => {
  return (
    <div className="shopping-list-container">
      <h2>Recommended Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
