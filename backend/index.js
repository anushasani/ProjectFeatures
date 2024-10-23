import express from "express";

import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

//

let restaurants = [
  {
    id: 1,
    name: "Restaurant A",
    menu: ["Pizza", "Pasta"],
    rating: 4.5,
    cuisine: "Italian",
  },
  {
    id: 2,
    name: "Restaurant B",
    menu: ["Burger", "Fries"],
    rating: 4.0,
    cuisine: "American",
  },
  {
    id: 3,
    name: "Restaurant C",
    menu: ["Sushi", "Ramen"],
    rating: 4.7,
    cuisine: "Japanese",
  },
  {
    id: 4,
    name: "Restaurant D",
    menu: ["Biryani", "Curry"],
    rating: 4.2,
    cuisine: "Indian",
  },
];

// GET /restaurants - Retrieve list of restaurants
app.get("/restaurants", (req, res) => {
  res.status(200).json(restaurants);
});

// GET /restaurants/:id - Retrieve specific restaurant menu
app.get("/restaurants/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  if (restaurant) {
    res.status(200).json(restaurant);
  } else {
    res.status(404).json({ error: "Restaurant not found" });
  }
});

// Start server
app.listen(5111, () => {
  console.log("Server is running on port 5111");
});
