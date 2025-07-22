import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {


  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for restaurants, cuisines, or dishes"
            className="search-input"
          />
          <img
            className="search-icon"
            src="https://img.icons8.com/ios7/512/search.png"
            alt="search"
          />
        </div>
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.data.avgRating >= 4.0;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.data.costForTwo / 100 <= 300;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Less than ₹300
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.data.deliveryTime <= 35;
              });
              setListOfRestaurants(filteredList);
            }}
          >
            Fast Delivery
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};
export default Body;