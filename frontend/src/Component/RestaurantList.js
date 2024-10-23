import React, { useState, useEffect } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Fetch restaurants from the backend
  useEffect(() => {
    fetch("http://localhost:5111/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  // Function to handle restaurant click and fetch the menu
  const handleRestaurantClick = (id) => {
    fetch(`http://localhost:5111/restaurants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedRestaurant(data);
        setIsSheetOpen(true);
      })
      .catch((error) => console.error("Error fetching menu:", error));
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <h2>{restaurant.name}</h2>
            <p>Rating: {restaurant.rating}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
          </li>
        ))}
      </ul>

      {isSheetOpen && (
        <BottomSheet
          restaurant={selectedRestaurant}
          onClose={() => setIsSheetOpen(false)}
        />
      )}
    </div>
  );
};
const BottomSheet = ({ restaurant, onClose }) => {
  return (
    <div className={`bottom-sheet ${restaurant ? "active" : ""}`}>
      <div className="sheet-content">
        <h2>{restaurant.name} Menu</h2>
        <ul>
          {restaurant.menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RestaurantList;
