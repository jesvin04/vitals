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

export default function ShoppingList() {
  

  return (
    <div>

      {/* Main Content */}
      
        <header>
          <div className="container">
            <h1>Vitals</h1>
            <nav>
              <a href="/">Home</a>
              <a href="#">About Us</a>
              <a href="#">Features</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="shopping-list-section">
            <div className="container">
              <h2>Your Recommended Products</h2>
              <div className="product-list">
                {products.map((product) => (
                  <div key={product.id} className="product-item">
                    <img
                      src={product.image}
                      
                      width={200}
                      height={200}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    
                    
                    <p className="product-platform">{product.platform}</p>
                    <button className="btn shop-now">Shop Now</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <p>&copy; 2024 Vitals. All rights reserved.</p>
          </div>
        </footer>
      
    </div>
  );
}