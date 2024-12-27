import React from 'react';
import './ShoppingList.css'; // Ensure you create a corresponding CSS file for styling

const products = [
  {
    id: 1,
    name: "Blood Glucose Monitor",
    description: "Portable device to monitor blood sugar levels for diabetes patients.",
    price: 39.99,
    rating: 4.5,
    image: "/blood-glucose-monitor.svg?height=200&width=200",
    platform: "Amazon"
  },
  {
    id: 2,
    name: "Diabetic-Friendly Snacks (Pack of Mixed Nuts)",
    description: "Healthy, low-glycemic index snack for controlling blood sugar levels.",
    price: 15.99,
    rating: 4.8,
    image: "/diabetic-snacks.svg?height=200&width=200",
    platform: "Flipkart"
  },
  {
    id: 3,
    name: "Foot Care Cream for Diabetics",
    description: "Prevents foot problems like dryness and infections common in diabetes.",
    price: 12.99,
    rating: 4.7,
    image: "/foot-care-cream.svg?height=200&width=200",
    platform: "Amazon"
  },
  {
    id: 4,
    name: "Smart Water Bottle with Hydration Tracker",
    description: "Tracks hydration levels and reminds you to drink water for optimal health.",
    price: 34.99,
    rating: 4.3,
    image: "/smart-water-bottle.svg?height=200&width=200",
    platform: "Flipkart"
  },
  {
      id: 5,
      name: "Insulated Lunch Bag for Meal Prep",
      description: "Keeps diabetic-friendly meals fresh and portable for on-the-go individuals.",
      price: 29.99,
      rating: 4.6,
      image: "/insulated-lunch-bag.svg?height=200&width=200",
      platform: "Amazon"
    },
    {
      id: 6,
      name: "Low-Carb Meal Replacement Shakes",
      description: "Nutrient-dense shakes designed to maintain stable blood sugar levels.",
      price: 19.99,
      rating: 4.4,
      image: "/low-carb-shakes.svg?height=200&width=200",
      platform: "Flipkart"
    },
    {
      id: 7,
      name: "Compression Socks for Diabetics",
      description: "Improves circulation and reduces swelling for diabetic foot care.",
      price: 14.99,
      rating: 4.7,
      image: "/compression-socks.svg?height=200&width=200",
      platform: "Amazon"
    },
    {
      id: 8,
      name: "Digital Food Scale",
      description: "Helps accurately measure portion sizes to manage carb intake effectively.",
      price: 24.99,
      rating: 4.5,
      image: "/digital-food-scale.svg?height=200&width=200",
      platform: "Flipkart"
    },
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