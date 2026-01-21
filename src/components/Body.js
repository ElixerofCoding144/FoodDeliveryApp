import RestaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [TopRatedRestaurants, setTopRatedRestaurants] =
    useState(RestaurantList);
  console.log(TopRatedRestaurants);
  return (
    <div className="body">
      <div className="filter-search-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = TopRatedRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setTopRatedRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {TopRatedRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
