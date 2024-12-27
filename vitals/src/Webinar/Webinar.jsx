
import React, { useState, useEffect } from 'react';
import './Webinar.css';

const Webinar = () => {
  const allWebinars = [
    {
      title: "Introduction to Telemedicine",
      speaker: "Dr. Jane Doe",
      date: "20th August 2024",
      time: "4:00 PM - 5:00 PM",
      category: "Technology"
    },
    {
      title: "Advancements in Cardiology",
      speaker: "Dr. John Smith",
      date: "25th August 2024",
      time: "6:00 PM - 7:00 PM",
      category: "Cardiology"
    },
    {
      title: "Nutrition and Preventive Medicine",
      speaker: "Dr. Emily White",
      date: "30th August 2024",
      time: "5:00 PM - 6:00 PM",
      category: "Nutrition"
    },
    {
      title: "Mental Health in the Digital Age",
      speaker: "Dr. Michael Brown",
      date: "5th September 2024",
      time: "3:00 PM - 4:00 PM",
      category: "Mental Health"
    },
    {
      title: "Pediatric Care Best Practices",
      speaker: "Dr. Sarah Johnson",
      date: "10th September 2024",
      time: "5:00 PM - 6:00 PM",
      category: "Pediatrics"
    },
    {
      title: "Future of AI in Healthcare",
      speaker: "Dr. Robert Lee",
      date: "15th September 2024",
      time: "4:00 PM - 5:00 PM",
      category: "Technology"
    },
  ];

  const [webinars, setWebinars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleWebinars, setVisibleWebinars] = useState(3);

  useEffect(() => {
    filterWebinars();
  }, [searchTerm, selectedCategory]);

  const filterWebinars = () => {
    let filtered = allWebinars;

    if (searchTerm) {
      filtered = filtered.filter(webinar => 
        webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(webinar => webinar.category === selectedCategory);
    }

    setWebinars(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const loadMore = () => {
    setVisibleWebinars(prevVisible => prevVisible + 3);
  };

  const categories = ['All', ...new Set(allWebinars.map(webinar => webinar.category))];

  return (
    <div>
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
        <div className="container">
          <h2>Upcoming Webinars</h2>
        </div>
        <section className="webinar-list-section">
          <h3>Learn from the Experts</h3>
          <div className="webinar-filters">
            <input
              type="text"
              placeholder="Search webinars..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="webinar-list">
            {webinars.slice(0, visibleWebinars).map((webinar, index) => (
              <div className="webinar-item" key={index}>
                <h4>{webinar.title}</h4>
                <p>Speaker: {webinar.speaker}</p>
                <p>Date: {webinar.date}</p>
                <p>Time: {webinar.time}</p>
                <p>Category: {webinar.category}</p>
                <a href="#" className="btn join-webinar">
                  Join Webinar
                </a>
              </div>
            ))}
          </div>
          {visibleWebinars < webinars.length && (
            <button onClick={loadMore} className="btn load-more">
              Load More
            </button>
          )}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 HealthFirst. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Webinar;
